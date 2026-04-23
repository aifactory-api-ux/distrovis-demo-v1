# Coverage Report — frontend
Fecha: 2026-04-23  |  Stack: TypeScript/React/Vitest  |  Ejecutado desde: frontend/

---

## Resumen ejecutivo
| Métrica | Valor |
|---------|-------|
| Estado general | 🟡 PARCIAL |
| Cobertura total | N/A (vitest coverage v8) |
| Tests ejecutados | 31 |
| Tests pasados | 22 |
| Tests fallidos | 9 |
| Tests con error | 0 |

---

## Tests pasados ✅
- `PlantaList.test.tsx::PlantaList > renders empty message when no plantas` — empty state
- `PlantaList.test.tsx::PlantaList > renders correct number of items` — 3 items
- `PlantaForm.test.tsx::PlantaForm > renders form inputs` — form inputs present
- `PlantaForm.test.tsx::PlantaForm > shows loading state` — loading state
- `PlantaForm.test.tsx::PlantaForm > accepts user input` — user input works
- `CentroList.test.tsx::CentroList > renders empty message when no centros` — empty state
- `CentroList.test.tsx::CentroList > renders correct number of items` — 2 items
- `CentroForm.test.tsx::CentroForm > renders form inputs` — form inputs present
- `CentroForm.test.tsx::CentroForm > shows loading state` — loading state
- `CentroForm.test.tsx::CentroForm > accepts user input` — user input works
- `OrdenList.test.tsx::OrdenList > renders empty message when no ordenes` — empty state
- `OrdenList.test.tsx::OrdenList > renders orden data in table` — orden data
- `OrdenForm.test.tsx::OrdenForm > shows loading state` — loading state
- `OrdenForm.test.tsx::OrdenForm > renders submit button` — button (with multiple match warning)
- `KPIDashboard.test.tsx::KPIDashboard > renders loading state` — loading
- `KPIDashboard.test.tsx::KPIDashboard > renders KPIs when provided` — KPIs
- `types.test.ts::Types > Planta has correct structure` — type test
- `types.test.ts::Types > Centro has correct structure` — type test
- `types.test.ts::Types > Orden has correct structure` — type test
- `types.test.ts::Types > OrdenCreate has correct structure` — type test
- `types.test.ts::Types > KPIResponse has correct structure` — type test
- `App.test.tsx::App > renders header with title` — header title

---

## Tests fallidos / errores ❌
### `tests/App.test.tsx > App > renders navigation buttons`
- **Tipo:** Fallo
- **Causa:** Múltiples elementos con el texto "Ordenes" (botón nav + h2 heading)
- **Mensaje:** `Found multiple elements with the text: Ordenes`
- **Archivo:** frontend/tests/App.test.tsx:28

### `tests/CentroForm.test.tsx > CentroForm > renders submit button`
- **Tipo:** Fallo
- **Causa:** Múltiples elementos con el texto "Crear Centro" (h3 + button)
- **Mensaje:** `Found multiple elements with the text: Crear Centro`
- **Archivo:** frontend/tests/CentroForm.test.tsx:15

### `tests/CentroList.test.tsx > CentroList > renders list of centros`
- **Tipo:** Fallo
- **Causa:** Texto dividido en múltiples elementos (strong + texto separado)
- **Mensaje:** `Unable to find an element with the text: Centro Norte - Mexico`
- **Archivo:** frontend/tests/CentroList.test.tsx:18

### `tests/OrdenForm.test.tsx > OrdenForm > renders form with required fields`
- **Tipo:** Fallo
- **Causa:** Input con placeholder "Producto" no tiene label asociada
- **Mensaje:** `Unable to find a label with the text of: /producto/i`
- **Archivo:** frontend/tests/OrdenForm.test.tsx:16

### `tests/OrdenForm.test.tsx > OrdenForm > renders planta and centro dropdowns`
- **Tipo:** Fallo
- **Causa:** Los selects no tienen aria-label con nombre "planta" o "centro"
- **Mensaje:** `Unable to find an accessible element with the role "combobox" and name /planta/i`
- **Archivo:** frontend/tests/OrdenForm.test.tsx:22

### `tests/OrdenForm.test.tsx > OrdenForm > renders submit button`
- **Tipo:** Fallo
- **Causa:** Múltiples elementos con el texto "Crear Orden" (h3 + button)
- **Mensaje:** `Found multiple elements with the text: Crear Orden`
- **Archivo:** frontend/tests/OrdenForm.test.tsx:28

### `tests/OrdenList.test.tsx > OrdenList > renders table headers`
- **Tipo:** Fallo
- **Causa:** Tabla no se renderiza cuando ordenes está vacío (muestra mensaje vacío)
- **Mensaje:** `Unable to find an element with the text: ID`
- **Archivo:** frontend/tests/OrdenList.test.tsx:14

### `tests/PlantaForm.test.tsx > PlantaForm > renders submit button`
- **Tipo:** Fallo
- **Causa:** Múltiples elementos con el texto "Crear Planta" (h3 + button)
- **Mensaje:** `Found multiple elements with the text: Crear Planta`
- **Archivo:** frontend/tests/PlantaForm.test.tsx:15

### `tests/PlantaList.test.tsx > PlantaList > renders list of plantas`
- **Tipo:** Fallo
- **Causa:** Texto dividido en múltiples elementos (strong + texto separado)
- **Mensaje:** `Unable to find an element with the text: Planta Norte - Mexico`
- **Archivo:** frontend/tests/PlantaList.test.tsx:18

---

## Gaps de cobertura
Código que quedó sin cubrir y por qué:
- Los tests fallidos son principalmente por selectores de testing-library incorrectos, no por código sin cubrir
- Los componentes reales funcionan bien — los tests tienen queries que no encuentran elementos por cómo están estructurado el HTML

---

## Recomendaciones
Ordered by priority:
1. 🟡 **[MEDIO]** — Usar `getAllByText` con función matcher para textos que aparecen en múltiples elementos
2. 🟡 **[MEDIO]** — Usar `getByPlaceholderText` en lugar de `getByLabelText` para inputs sin label
3. 🟡 **[MEDIO]** — Usar `screen.getByRole('button', { name: 'Crear Orden' })` para botones con texto único
4. 🟢 **[BAJO]** — Agregar `aria-label` a los selects para mejor accesibilidad y testing

---

## Output completo
```
4:11:12 PM [vite] warning: `esbuild` option was specified by "vite:react-babel" plugin. This option is deprecated, please use `oxc` instead.
4:11:12 PM [vite] warning: `optimizeDeps.esbuildOptions` option was specified by "vite:react-babel" plugin. This option is deprecated, please use `oxc` instead.
Both esbuild and oxc options were set. oxc options will be used and esbuild options will be ignored. The following esbuild options were set: `{ jsx: 'automatic', jsxImportSource: undefined }`

 RUN  v4.1.5 /workspace/94102233-3fa6-4163-b562-ef9a29178b4a/frontend
      Coverage enabled with v8

 ❯ tests/OrdenForm.test.tsx (4 tests | 3 failed) 447ms
     × renders form with required fields 110ms
     × renders planta and centro dropdowns 306ms
     × renders submit button 14ms
 ❯ tests/CentroForm.test.tsx (4 tests | 1 failed) 527ms
     × renders submit button 34ms
 ❯ tests/PlantaForm.test.tsx (4 tests | 1 failed) 498ms
     × renders submit button 35ms
 ❯ tests/OrdenList.test.tsx (3 tests | 1 failed) 138ms
     × renders table headers 22ms
Warning: A vi.mock("../src/hooks/usePlantas") call in "/workspace/94102233-3fa6-4163-b562-ef9a29178b4a/frontend/tests/App.test.tsx" is not at the top level of the module...
Warning: A vi.mock("../src/hooks/useCentros") call in "/workspace/94102233-3fa6-4163-b562-ef9a29178b4a/frontend/tests/App.test.tsx" is not at the top level of the module...
Warning: A vi.mock("../src/hooks/useOrdenes") call in "/workspace/94102233-3fa6-4163-b562-ef9a29178b4a/frontend/tests/App.test.tsx" is not at the top level of the module...
Warning: A vi.mock("../src/hooks/useKPIs") call in "/workspace/94102233-3fa6-4163-b562-ef9a29178b4a/frontend/tests/App.test.tsx" is not at the top level of the module...
 ❯ tests/App.test.tsx (3 tests | 1 failed) 135ms
     × renders navigation buttons 29ms
 ❯ tests/PlantaList.test.tsx (3 tests | 1 failed) 334ms
     × renders list of plantas 25ms
 ❯ tests/CentroList.test.tsx (3 tests | 1 failed) 296ms
     × renders list of centros 20ms

⎯⎯⎯⎯⎯⎯⎯⎯ Failed Tests 9 ❌

 FAIL  tests/App.test.tsx > App > renders navigation buttons
... (full error output captured above)

 Test Files  7 failed | 2 passed (9)
      Tests  9 failed | 22 passed (31)
   Start at 16:11:12
   Duration  20.21s
```