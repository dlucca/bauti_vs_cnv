# Bauti vs. la CNV

Base para una experiencia mobile-first de preparacion del examen de idoneidad CNV con estetica arcade retro y una identidad mas juguetona.

## Stack elegido

- `Next.js` con App Router
- `TypeScript`
- CSS global con variables de diseño y enfoque mobile-first
- Persistencia local en `localStorage` para el MVP
- UI retro inspirada en videogames de los 80

## Por que este stack

- Vercel despliega Next.js sin friccion y deja abierta la evolucion a SSR, Server Actions y APIs.
- El runtime unico simplifica producto, contenido, analytics y futura autenticacion.
- Para un MVP de entrenamiento, conviene priorizar una UI rapida, estable y facil de iterar.

## Logica pedagogica incluida

- Simulacro de 60 preguntas organizado en 6 modulos
- Correccion inmediata al finalizar
- Puntaje general
- Precision por modulo
- Deteccion automatica de las dos areas mas flojas
- Texto corto de refuerzo al cierre de cada intento
- Historial local de intentos en el dispositivo

## Siguiente evolucion recomendada

1. Revisar juridica y academicamente el banco cargado contra la ultima version oficial de la guia y normas CNV.
2. Persistir intentos y progreso en `Vercel Postgres`.
3. Agregar autenticacion para seguir avance por alumno.
4. Generar refuerzos dinamicos con IA a partir de errores reales, manteniendo un limite de lectura cercano a 10 minutos.

## Desarrollo

```bash
npm install
npm run dev
```

## Nota importante

Las preguntas incluidas ahora estan inspiradas en la guia local `guia_de_estudio_v2.pdf` y adaptadas a formato multiple choice para practica. Antes de usar el producto con alumnos en produccion, conviene hacer una revision final de contenido con alguien que valide criterio tecnico y normativo CNV.
