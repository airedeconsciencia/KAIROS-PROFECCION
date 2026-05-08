# KAIROS | Ascendant Engine Specification
**STATUS: CORE LOCKED – DO NOT MODIFY**
**VERSION: 1.0 (STABLE / V48.3.11)**

## 1. Propósito del Módulo
El `Ascendant Engine` de KAIROS es el componente nuclear encargado de calcular la longitud eclíptica del Ascendente con precisión astronómica. Este módulo está diseñado para ser universal, permitiendo el cálculo preciso en cualquier ubicación geográfica y momento histórico, gestionando automáticamente las complejidades de las zonas horarias y el horario de verano (DST).

## 2. Flujo de Cálculo Completo

### Paso A: Normalización de Entradas
- **Fecha/Hora**: Se reciben en formato local (YYYY-MM-DD y HH:mm).
- **Coordenadas**: Latitud y longitud en formato decimal.
- **Timezone (IANA)**: Identificador de zona horaria (ej: `Europe/Madrid`). Si es nulo, el sistema realiza una inferencia geodésica.

### Paso B: Conversión IANA a UT (Universal Time)
Utilizando la librería **Luxon**, el motor cruza la fecha y hora local con la base de datos IANA para obtener el offset histórico exacto (incluyendo cambios de ley y DST).
- `luxonDt = DateTime.fromObject({ ...localData }, { zone: ianaId })`
- `utDate = luxonDt.toJSDate()`
- `offset = luxonDt.offset / 60`

### Paso C: Tiempo Astronómico (Julian Day)
El objeto `Date` en UTC se convierte a **Julian Day (JD)** mediante la librería `Astronomy Engine`.
- `Time = Astronomy.MakeTime(utDate)`
- `JD_UT = Time.ut`

### Paso D: Tiempo Sidéreo Gast (Greenwich Apparent Sidereal Time)
Se calcula el tiempo sidéreo aparente en Greenwich para el instante dado.
- `GAST_Hours = Astronomy.SiderealTime(Time)`
- `GAST_Degrees = GAST_Hours * 15`

### Paso E: Tiempo Sidéreo Local (LST) y RAMC
El GAST se proyecta a la longitud local para obtener el **LST**.
- `LST_Degrees = (GAST_Degrees + Longitud + 360) % 360`
- `RAMC (Right Ascension of the Medium Coeli) = LST_Degrees en Radianes`

### Paso F: Oblicuidad de la Eclíptica (ε)
Se calcula la inclinación real del eje terrestre para ese momento específico.
- `ε = Astronomy.e_tilt(Time).tobl`

### Paso G: Fórmula del Ascendente (Esférica de Precisión)
Se aplica la fórmula trigonométrica para obtener el punto de intersección de la eclíptica con el horizonte oriental:
`Asc_Rad = arctan(cos(RAMC) / -(sin(RAMC) * cos(ε) + tan(φ) * sin(ε)))`
*(Donde φ es la latitud geográfica)*.

### Paso H: Conversión a Formato Astrológico
La longitud raw (0-360°) se desglosa en Signo, Grados, Minutos y Segundos.
- `Signo = Zodiac[floor(Lon / 30)]`
- `Grados = floor(Lon % 30)`

## 3. Dependencias
- **Astronomy Engine (v2.1.19)**: Para el cálculo de Julian Day, Sidereal Time y Oblicuidad.
- **Luxon (v3.4.4)**: Para la gestión de la base de datos de zonas horarias IANA.

## 4. Ejemplos Reales Validados (Regression Tests)

| Caso | Fecha/Hora | Lugar | Timezone | Offset | Resultado |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Caso 1** | 29/05/1973 07:30 | Maó, ES | Europe/Madrid | +1 | **Cáncer 8° 36'** |
| **Caso 2** | 21/08/1978 11:04 | Maó, ES | Europe/Madrid | +2 (DST) | **Libra 15° 39'** |
| **Caso 3** | 01/01/1990 12:00 | New York, US | America/New_York | -5 | Validado OK |

## 5. Interfaz Pública Reutilizable
```javascript
/**
 * Retorna objeto con sign, deg, min, sec y diagnostic data.
 */
getAscendant(birthDate, birthTime, latitude, longitude, timezone = null)
```
---
*Documento generado para el cierre de la Fase 1 del Proyecto KAIROS.*
