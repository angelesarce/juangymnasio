/* Para esto tenes que construir una funcion validadora (en src --> utils --> validateInput
que sea reutilizable que chequee los siguientes parametros: 
    - exactLength
    - minLength
    - minWords
    - maxLength
    - maxWords
    - containsChars
*/


const textContactData = {
    data: [
        {order: 1, elementLabel: "Nombre", editable: true, startValue:"", elementType: "Text", validations: {exactLength: null, minLength: 6, minWords: 2, maxLength: 255, maxWords: 5, containsChars: null}, onError: "Ejemplo error"},
        {order: 2, elementLabel: "Email", editable: true, startValue:"", elementType: "Text", validations:{exactLength: null, minLength:6, minWords: null, maxLength: 255, maxWords: 1, containsChars: ["@",".com"]},onError: "Ejemplo error"},
        {order: 3, elementLabel: "Celular", editable: true, startValue:"+549", elementType: "Text", validations:{exactLength: 13, minLength: null, minWords: null, maxLength: null, maxWords: null, containsChars: null}, onError: "Ejemplo error"}
    ]
}

const plansOptions = {
    data: [
        {order: 1, planTitle: "Plan Vago de Mierda", planSubtitle:"1 vez por semana", planDescription: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum", planPrice: "$ 150 por mes" },
        {order: 2, planTitle: "Plan Vago de Mierda", planSubtitle:"2 veces por semana", planDescription: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum", planPrice: "$ 250 por mes" },
        {order: 3, planTitle: "Plan Vago de Mierda", planSubtitle:"3 veces por semana", planDescription: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum", planPrice: "$ 3000 por mes" },
        {order: 4, planTitle: "Plan Jaime", planSubtitle:"4 veces por semana", planDescription: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum", planPrice: "$ 350 por mes" },
        {order: 5, planTitle: "Plan Zeus", planSubtitle:"5 veces por semana", planDescription: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum", planPrice: "$ 450 por mes" }        
    ]
}

const calendarOptions = {
    data: [
        {order: 1, calendarDayLabel: "Lunes", availableSpots: [
            {order: 1, spotLabel: "9 - 10", availableSpaces: 2, totalSpace: 5},
            {order: 2, spotLabel: "12 - 13", availableSpaces: 1, totalSpace: 5},
            {order: 4, spotLabel: "18 - 19", availableSpaces: 3, totalSpace: 5},
            {order: 3, spotLabel: "16 - 17", availableSpaces: 2, totalSpace: 5},
        ]},
        {order: 3, calendarDayLabel: "Miercoles", availableSpots: [
            {order: 1, spotLabel: "9 - 10", availableSpaces: 2, totalSpace: 5},
            {order: 2, spotLabel: "12 - 13", availableSpaces: 1, totalSpace: 5},
            {order: 4, spotLabel: "18 - 19", availableSpaces: 3, totalSpace: 5},
            {order: 3, spotLabel: "16 - 17", availableSpaces: 2, totalSpace: 5},
        ]},
        {order: 2, calendarDayLabel: "Martes", availableSpots: [
            {order: 1, spotLabel: "11 - 12", availableSpaces: 2, totalSpace: 5},
            {order: 2, spotLabel: "12 - 13", availableSpaces: 1, totalSpace: 5},
            {order: 4, spotLabel: "16 - 17", availableSpaces: 3, totalSpace: 5},
            {order: 3, spotLabel: "19 - 20", availableSpaces: 2, totalSpace: 5},
        ]},
        {order: 4, calendarDayLabel: "Jueves", availableSpots: [
            {order: 1, spotLabel: "11 - 12", availableSpaces: 2, totalSpace: 5},
            {order: 2, spotLabel: "12 - 13", availableSpaces: 1, totalSpace: 5},
            {order: 4, spotLabel: "16 - 17", availableSpaces: 3, totalSpace: 5},
            {order: 3, spotLabel: "19 - 20", availableSpaces: 2, totalSpace: 5},
        ]},
        {order: 5, calendarDayLabel: "Viernes", availableSpots: [
        ]},
    ]
}