# Roadmap de Implementación — Parrot Recorder

## Enfoque
Plan incremental **Boundary-First** bajo SDD Nivel 3. Ninguna fase avanza sin cerrar criterios de salida de la anterior.

## Fase 0 — Spec Lock
**Objetivo:** consolidar especificación maestra y plan de diseño.

### T0.1 Constitución y artefactos base
- Validar `.speckit.constitution`, `brief.md`, `roadmap.md`.
- Crear/actualizar `design.md` con arquitectura objetivo y riesgos.
- Salida: baseline documental aprobada.

## Fase 1 — Infraestructura de Harness
**Objetivo:** bootstrap seguro de Electron + TypeScript.

### T1.1 Setup del runtime
- Configurar Electron Forge + TS estricto.
- Definir estructura multi-proceso (`src/main`, `src/preload`, `src/renderer`, `src/shared`).

### T1.2 Hardening obligatorio
- Aplicar `contextIsolation: true`, `nodeIntegration: false`, CSP estricta.
- Bloquear vías inseguras y preparar validación de origen para control plane.

**Salida de Fase 1:** arranque seguro validado por checklist de seguridad.

## Fase 2 — Contratos y Fronteras (IPC)
**Objetivo:** comunicación tipada y verificable.

### T2.1 Esquemas maestros Zod
- Crear `src/shared/schemas.ts` (CaptureEntity y contratos de sesión).
- Exponer tipos inferidos para main/preload/renderer.

### T2.2 Adaptadores IPC
- Implementar handlers con parseo estricto y rechazo por defecto.
- Registrar anomalías de esquema para auditoría.

**Salida de Fase 2:** pruebas de frontera IPC (happy path + invalid payload) en verde.

## Fase 3 — Motor de Captura Semántica
**Objetivo:** extracción estructurada sin screenshots por defecto.

### T3.1 Integración accesibilidad nativa
- Implementar bindings UIA (Windows) / Accessibility API (macOS).
- Normalizar entidades (`role`, `label`, `value`, `bounds`, `process_name`).

### T3.2 Fallback visual opcional
- Activación condicionada para apps sin metadata accesible.
- Aplicar reglas de minimización/privacidad.

**Salida de Fase 3:** generación estable de workflow JSON estructurado.

## Fase 4 — UI Core + Bubble Overlay
**Objetivo:** experiencia de usuario cyber/dark no intrusiva.

### T4.1 Ventana principal
- Selector de apps, estado listener, historial de sesiones.
- Start Session con animación de colapso hacia tray.

### T4.2 Burbuja flotante
- Overlay frameless circular/elíptica con timer y stop.
- `setAlwaysOnTop(true, 'screen-saver')` + lógica `setIgnoreMouseEvents` con hover.
- Arrastre con snap-to-edge.

**Salida de Fase 4:** UX completa de sesión con control lateral persistente.

## Fase 5 — Observabilidad y Diagnóstico
**Objetivo:** operación trazable y depuración robusta.

### T5.1 MCP Diagnostics
- Servidor MCP para salud del motor y eventos críticos.
- Métricas y eventos en tiempo real para troubleshooting.

### T5.2 Protocolo Root-Cause-First
- Flujos de depuración documentados y automatizados.
- Clasificación de fallos: contrato, frontera, nativo.

**Salida de Fase 5:** playbook de incidentes + telemetría activa.

## Política de pruebas por fase
- TDD obligatorio en componentes críticos.
- Gate de merge mínimo: pruebas de contrato + pruebas de frontera + validación de seguridad.
