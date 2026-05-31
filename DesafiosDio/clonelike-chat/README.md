Node + ChatGPT Integration

- **Run**: from repo root run `npm --prefix server start`
- **Env**: put your API key in `server/.env` as `OPEN_AI_KEY` (or `OPENAI_API_KEY`).
- **API**: POST to `http://localhost:5555/api/chat` with JSON body `{ "messages": [ ... ] }`.
  - Example message format accepted by this project:

```
{ "messages": [ { "role": "user", "content": [ { "type": "text", "text": "Olá" } ] } ] }
```

If you want, I can commit these changes, add tests, or build a small frontend example.

Windows
------

If you run into the PowerShell error "execution of scripts is disabled on this system" when running `npm --prefix server start`, use one of these options:

- Run via the Windows command prompt (cmd):

```cmd
cmd /c npm --prefix server start
```

- Call the npm executable directly in PowerShell:

```powershell
npm.cmd --prefix server start
```

- Allow locally-signed scripts for your user (safe, no admin required):

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

`RemoteSigned` allows running scripts created on your machine while still protecting against untrusted remote scripts.
