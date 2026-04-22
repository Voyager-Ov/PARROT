# Design Plan — Parrot Recorder (Pre-Implementation)

## Estado
Documento de diseño inicial requerido por la constitución SDD Nivel 3.

## 1. Arquitectura objetivo
- Multi-proceso Electron con límites explícitos:
  - Main: engine, accesibilidad nativa, persistencia, seguridad.
  - Preload: surface mínima de API segura.
  - Renderer App: configuración y visualización.
  - Renderer Bubble: control en vivo de sesión.

## 2. Contratos principales
- Definir esquemas Zod en `src/shared/schemas.ts`.
- Mínimo incluir:
  - `CaptureEntitySchema`
  - `RecordingStartSchema`
  - `RecordingStopSchema`
  - `AnomalyEventSchema`

## 3. Flujo de sesión
1. User inicia Start Session.
2. Main valida comando IPC + correlation metadata.
3. Main inicia engine y abre bubble overlay.
4. Engine persiste entidades semánticas en JSON.
5. Stop Session finaliza captura y restaura ventana principal.

## 4. Seguridad y privacidad
- BrowserWindow defaults endurecidos.
- CSP estricta sin inline scripts.
- Rechazo de payloads no válidos.
- Política "no screenshot" por defecto.

## 5. Riesgos técnicos abiertos
- Disponibilidad/fiabilidad de bindings nativos por plataforma.
- Latencia en extracción UIA bajo carga.
- Interacciones click-through en overlay multi-monitor.

## 6. Plan de validación inicial
- Tests de contratos Zod (positivos/negativos).
- Tests de frontera IPC por canal.
- Smoke test de ciclo start/stop con persistencia JSON.
