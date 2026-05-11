# Proyecto Simulador de Ecosistemas #0: Inicio

_Acostumbrándome a desarrollar juegos sin jugadores y autómatas celulares_

## Introducción

Anteriormente creé una aplicación que simula el Juego de la Vida, un autómata celular muy interesante. Pero tengo curiosidad por este tipo de aplicaciones, así que decidí desarrollar un simulador de ecosistemas que muestre las interacciones entre plantas y diferentes tipos de animales (carnívoros/herbívoros). El objetivo es mostrar cómo un ecosistema permanece equilibrado y cómo puede desequilibrarse si se introduce otra especie de animal o si hay una falta de alimentos. Puedes ver mi repositorio de Game of Life [aquí](https://github.com/silvericarus/lifegame-js) y jugarlo [aquí](https://lifegame-js.vercel.app/).

## Ideas del proyecto

- Planeo desarrollar este simulador utilizando React.js y Node.js.

- Aún no estoy seguro del diseño gráfico real. Trabajar con canvas de HTML5 ha resultado ser bastante difícil, por lo que podría explorar alternativas.

- El ecosistema debe tener una cadena alimenticia que se regule de manera natural.

- La simulación funcionará en un ciclo de día/noche. El comportamiento de los animales cambiará según la hora del día.

- Podría añadirse un sistema climático para simular cómo los cambios ambientales (por ejemplo, calor, frío, sequía) impactan la cadena alimenticia y la estabilidad del ecosistema.

- Se debería llevar un registro o diario de las acciones realizadas cada día en la simulación.

- Cada tipo de ser vivo debe tener una clase con sus variables y funciones.

- El clima afecta a los seres vivos, con efectos positivos o negativos.

- Planeo desarrollar un sistema de navegación para que los seres vivos puedan “caminar” libremente por el mapa.

## Problemas

- Recientemente aprendí React.js y aún no lo he utilizado para desarrollar nada, así que no estoy del todo familiarizado con este framework.

- Los canvas de HTML5 son muy difíciles de manejar, tal vez debería buscar algo más.

Estos dos problemas principales necesitan ser solucionados antes de poder avanzar con el sistema de generación de árboles u otros problemas similares. Pero estos dos me están deteniendo en este momento. Mi visualización en React no funciona y el canvas no se muestra en React. Necesito resolver estos dos problemas. Buscaré una alternativa al canvas de HTML5 que funcione en React y sea más fácil de usar.

Esta es la vista actual de la aplicación, y este es el [repositorio](https://github.com/silvericarus/si_ecosystem):

<iframe style={{
    width: "100vw",
    outline: "1px solid #252525",
    border: 0,
    borderRadius: 8,
    marginBottom: 16,
    zIndex: 100
  }} src="https://codesandbox.io/embed/slxgf3?view=editor+%2B+preview&module=%2Fsrc%2Fcomponents%2FApp.jsx"></iframe>

El repositorio aún no está actualizado a la versión mostrada en CodeSandbox, pero tengo un error extraño que no entiendo. Es un error que también necesito revisar.

Publicaré diarios de desarrollo a medida que resuelva los problemas. Espero poder solucionarlos pronto.
