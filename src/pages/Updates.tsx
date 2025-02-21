import { useEffect } from "react";
import { check } from "@tauri-apps/plugin-updater";
import * as log from "@tauri-apps/plugin-log";
import { useStore } from "../store";

export function Updates() {
  const currentVersion = useStore((s) => s.appVersion);
  const setMessage = useStore((s) => s.setMessage);

  const latestVersion = "???";

  // run once on startup (twice in dev mode)
  useEffect(() => {
    try {
      (async () => {
        setMessage("info", "Checking for updates...");
        const update = await check({ timeout: 5000 });
        setMessage("info", "Checked for updates.");
        if (update) {
          log.info(`Update available: ${update.version}`);
          setMessage("info", `Update available: ${update.version}`);
        } else {
          log.info("Up2Date!");
          setMessage("info", "Up2date!");
        }
      })();
    } catch (error: any) {
      log.error(`${error}`);
      setMessage("error", `${error}`);
    }
  }, []);

  return (
    <div className="flex flex-col items-center h-full">
      <p className="m-8">TODO: updates</p>
      <p>Current Version: {currentVersion}</p>
      <p>Latest Version: {latestVersion}</p>
    </div>
  );
}
