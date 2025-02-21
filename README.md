# ZKN UI Client

## Development

### Tauri App Updater Setup

1. Generate signing keys.

   TODO link to tairu updater plugin page.

   ```sh
   cargo tauri .... where key...
   ```

2. Configure the GitHub project.

   `Settings > Secrets and variables > Actions > Secrets > Repository secrets`:

   - `TAURI_SIGNING_PRIVATE_KEY`
   - `TAURI_SIGNING_PRIVATE_KEY_PASSWORD`
