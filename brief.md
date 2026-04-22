# Brief del Producto — Parrot Recorder

## 1. Misión
Construir un recorder de escritorio de alto rendimiento en Electron que capture de forma silenciosa y semántica los flujos de trabajo del usuario, priorizando accesibilidad sobre píxeles, para alimentar análisis avanzado en el ecosistema Parrot.

## 2. Diferenciador
Parrot Recorder no es un grabador de video: es un **harness de captura semántica** que reconstruye intención operacional a partir de entidades del árbol de accesibilidad.

## 3. Objetivos de Producto
1. **UX inmersiva y minimalista** con estética Cyber-Dark.
2. **Captura no intrusiva** y estructurada (JSON), con privacidad por diseño.
3. **Seguridad de grado alto** mediante aislamiento de procesos + contratos tipados validados.

## 4. Alcance Funcional Inicial
- Flujo Start Session → minimización/colapso UI principal.
- Burbuja flotante lateral (overlay frameless) con timer + stop.
- Persistencia de interacciones semánticas en workflow/log JSON.
- Restauración de UI principal al finalizar sesión.

## 5. Requisitos de Interfaz
- Dark base `#0a0a0c`.
- Acento neón `#00f3ff`.
- Glassmorphism con `backdrop-filter: blur(12px)`.
- Borde glow `box-shadow: 0 0 8px #00f3ff`.
- Botón Stop en `#ff003c`.

## 6. Modelo de Captura
- Primario: UIA/macOS Accessibility (roles, labels, estados/valores, bounds, proceso).
- Secundario (opcional): visión ligera cuando accesibilidad no esté disponible.
- Regla de privacidad: capturar estructura, no contenido sensible visual.

## 7. Matriz de Requisitos Priorizados
| ID | Requisito | Prioridad | Criterio de aceptación |
|---|---|---|---|
| RF-01 | Aislamiento de Procesos | P1 | Crash de renderer no detiene captura en main |
| RF-02 | IPC con Zod | P1 | Mensajes inválidos se bloquean y auditan |
| RF-03 | Captura Semántica | P1 | Se extraen role/label/value sin screenshot por defecto |
| RF-04 | UI Cyber/Glassmorphism | P2 | Blur + acento #00f3ff en la suite |
| RF-05 | MCP Diagnostics | P2 | Telemetría en tiempo real del motor de captura |
| RF-06 | Spec-Driven Debugging | P3 | Protocolo Root-Cause-First aplicado en incidentes |

## 8. Riesgos Principales
- Violaciones boundary-first (lógica privilegiada en renderer).
- Superficies IPC sin validación runtime.
- Dependencia parcial de accesibilidad en apps legacy.
- Degradación de privacidad si fallback visual no está limitado.

## 9. Criterios de Éxito
- Flujo de sesión completo estable (start/bubble/stop/restore).
- Contratos IPC críticos cubiertos con pruebas positivas/negativas.
- Registro JSON utilizable para auditoría y análisis downstream.
- Telemetría de salud de captura disponible por MCP.
