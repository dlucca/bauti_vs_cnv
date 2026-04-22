import { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    id: 1,
    area: "modulo-1",
    prompt: "¿Cual es el objetivo principal de la Ley 26.831 de Mercado de Capitales?",
    options: [
      "Garantizar la rentabilidad de las inversiones bursatiles",
      "Regular, supervisar y fiscalizar el mercado de capitales",
      "Administrar directamente los mercados autorizados",
      "Fijar precios minimos para los valores negociables"
    ],
    correctIndex: 1,
    explanation: "La ley busca ordenar, supervisar y fiscalizar el mercado, no asegurar rendimientos."
  },
  {
    id: 2,
    area: "modulo-1",
    prompt: "¿Que organismo actua como autoridad de aplicacion de la Ley 26.831?",
    options: ["Banco Central", "Ministerio de Economia", "Comision Nacional de Valores", "Bolsa de Comercio"],
    correctIndex: 2,
    explanation: "La autoridad de aplicacion es la Comision Nacional de Valores."
  },
  {
    id: 3,
    area: "modulo-1",
    prompt: "¿Cual de las siguientes NO es una facultad de la CNV?",
    options: [
      "Fiscalizar sujetos del mercado",
      "Dictar regulaciones en su ambito",
      "Aplicar sanciones",
      "Garantizar la rentabilidad de los inversores"
    ],
    correctIndex: 3,
    explanation: "La CNV regula y controla, pero no garantiza ganancias."
  },
  {
    id: 4,
    area: "modulo-1",
    prompt: "Para solicitar autorizacion de oferta publica, una emisora debe presentar principalmente:",
    options: ["Un reglamento interno de directorio", "Un prospecto", "Una memoria de marketing", "Un contrato de underwriter obligatorio"],
    correctIndex: 1,
    explanation: "El prospecto contiene la informacion esencial del emisor y de los valores ofrecidos."
  },
  {
    id: 5,
    area: "modulo-1",
    prompt: "Si se realiza una oferta publica sin autorizacion de la CNV, se configura:",
    options: ["Una colocacion primaria valida", "Una oferta irregular", "Una OPA simplificada", "Una exencion automatica"],
    correctIndex: 1,
    explanation: "Ofrecer publicamente sin autorizacion constituye oferta irregular."
  },
  {
    id: 6,
    area: "modulo-1",
    prompt: "¿Que principio debe respetarse en toda OPA?",
    options: [
      "Reserva informativa hasta el cierre",
      "Igualdad de trato y transparencia",
      "Preferencia para accionistas mayoritarios",
      "Suspension de difusion al mercado"
    ],
    correctIndex: 1,
    explanation: "La OPA debe respetar igualdad de trato y transparencia."
  },
  {
    id: 7,
    area: "modulo-1",
    prompt: "¿Cual es el plazo minimo para aceptar una OPA una vez publicada?",
    options: ["5 dias habiles", "10 dias habiles", "15 dias corridos", "30 dias corridos"],
    correctIndex: 1,
    explanation: "La guia ubica en 10 dias habiles el plazo minimo de aceptacion."
  },
  {
    id: 8,
    area: "modulo-1",
    prompt: "En la Ley 26.831, DUVA significa:",
    options: [
      "Declaracion Unica de Valores Autorizados",
      "Documento Uniforme de Verificacion de Activos",
      "Declaracion Unilateral de Adquisicion",
      "Disposicion de Uso de Valores Admitidos"
    ],
    correctIndex: 2,
    explanation: "DUVA refiere al regimen de Declaracion Unilateral de Adquisicion."
  },
  {
    id: 9,
    area: "modulo-1",
    prompt: "¿Que deben incluir los factores de riesgo en un prospecto?",
    options: [
      "Solo informacion comercial favorable",
      "Riesgos relevantes aunque esten proximos a vencer",
      "Unicamente contingencias judiciales firmes",
      "Solo deudas sin garantias"
    ],
    correctIndex: 1,
    explanation: "Los factores de riesgo relevantes deben informarse aunque el vencimiento sea cercano."
  },
  {
    id: 10,
    area: "modulo-1",
    prompt: "Para ingresar al regimen PyME CNV, una empresa debe:",
    options: [
      "Cotizar en una bolsa extranjera",
      "Tener garantia estatal permanente",
      "Cumplir parametros establecidos por la SEPyME",
      "Emitir solo acciones ordinarias"
    ],
    correctIndex: 2,
    explanation: "La condicion PyME CNV se vincula con los parametros definidos por la SEPyME."
  },
  {
    id: 11,
    area: "modulo-2",
    prompt: "El objetivo del lavado de activos es principalmente:",
    options: [
      "Reducir impuestos empresariales",
      "Dar apariencia licita a fondos de origen delictivo",
      "Mejorar la trazabilidad bancaria",
      "Aumentar la liquidez de mercado"
    ],
    correctIndex: 1,
    explanation: "El lavado busca simular licitud sobre fondos de origen ilicito."
  },
  {
    id: 12,
    area: "modulo-2",
    prompt: "Las etapas basicas del lavado de activos son:",
    options: [
      "Captacion, suscripcion e integracion",
      "Emision, colocacion y rescate",
      "Colocacion, estratificacion e integracion",
      "Registro, custodia y pago"
    ],
    correctIndex: 2,
    explanation: "La secuencia clasica es colocacion, estratificacion e integracion."
  },
  {
    id: 13,
    area: "modulo-2",
    prompt: "Una diferencia central entre lavado de activos y financiamiento del terrorismo es que este ultimo:",
    options: [
      "Solo puede financiarse con fondos ilicitos",
      "Puede involucrar fondos de origen licito",
      "No requiere sujetos obligados",
      "No esta regulado por la UIF"
    ],
    correctIndex: 1,
    explanation: "En financiamiento del terrorismo el origen de fondos puede ser licito; importa el destino."
  },
  {
    id: 14,
    area: "modulo-2",
    prompt: "Dentro del mercado de capitales, son sujetos obligados a normas PLAFT, entre otros:",
    options: [
      "Solo los emisores con oferta publica",
      "Solo las entidades bancarias",
      "Los agentes registrados alcanzados por la normativa",
      "Unicamente las sociedades anonimas abiertas"
    ],
    correctIndex: 2,
    explanation: "Los agentes registrados alcanzados por CNV/UIF integran el esquema de sujetos obligados."
  },
  {
    id: 15,
    area: "modulo-2",
    prompt: "La debida diligencia del cliente apunta a:",
    options: [
      "Acelerar la apertura evitando documentacion",
      "Conocer identidad, actividad, perfil y origen de fondos",
      "Eliminar toda posibilidad de riesgo",
      "Delegar el control a la entidad bancaria"
    ],
    correctIndex: 1,
    explanation: "La debida diligencia implica identificar, perfilar y comprender la actividad del cliente."
  },
  {
    id: 16,
    area: "modulo-2",
    prompt: "Cuando una operacion no es consistente con el perfil del cliente, corresponde:",
    options: [
      "Ignorarla si no supera un umbral informal",
      "Ejecutarla y revisar luego",
      "Profundizar el analisis segun enfoque basado en riesgo",
      "Cerrar la cuenta sin investigacion"
    ],
    correctIndex: 2,
    explanation: "La respuesta adecuada es analizar la inconsistencia y escalar segun riesgo."
  },
  {
    id: 17,
    area: "modulo-2",
    prompt: "La autoridad de aplicacion de la Ley 25.246 es:",
    options: ["CNV", "UIF", "BCRA", "AFIP"],
    correctIndex: 1,
    explanation: "La Unidad de Informacion Financiera es autoridad de aplicacion en esta materia."
  },
  {
    id: 18,
    area: "modulo-2",
    prompt: "El enfoque basado en riesgo implica que la intensidad de controles debe:",
    options: [
      "Ser identica para todos los clientes",
      "Depender del riesgo del cliente, producto y operacion",
      "Aplicarse solo a clientes corporativos",
      "Usarse solo luego de un ROS"
    ],
    correctIndex: 1,
    explanation: "Los controles deben graduarse segun el riesgo observado."
  },
  {
    id: 19,
    area: "modulo-2",
    prompt: "El monitoreo PLAFT adecuado se limita al momento del alta del cliente:",
    options: ["Verdadero", "Falso", "Solo para clientes no residentes", "Solo en cuentas inactivas"],
    correctIndex: 1,
    explanation: "La debida diligencia continua durante la relacion comercial mediante monitoreo y actualizacion."
  },
  {
    id: 20,
    area: "modulo-2",
    prompt: "Un ROS se vincula con:",
    options: [
      "Reporte de una operacion sospechosa",
      "Registro obligatorio de suscripciones",
      "Resumen oficial de saldos",
      "Reclamo ordinario de servicio"
    ],
    correctIndex: 0,
    explanation: "ROS significa reporte de operacion sospechosa."
  },
  {
    id: 21,
    area: "modulo-3",
    prompt: "¿Que plazo tiene una emisora para informar un hecho relevante?",
    options: ["24 horas", "5 dias habiles", "10 dias habiles", "30 dias corridos"],
    correctIndex: 0,
    explanation: "La guia ubica en 24 horas el plazo para informar hechos relevantes."
  },
  {
    id: 22,
    area: "modulo-3",
    prompt: "El Responsable de Relaciones con el Publico Inversor debe ser designado por:",
    options: ["La asamblea ordinaria", "El organo de administracion", "La CNV", "El mercado donde cotiza"],
    correctIndex: 1,
    explanation: "La designacion corresponde al organo de administracion de la emisora."
  },
  {
    id: 23,
    area: "modulo-3",
    prompt: "Las denuncias por incumplimiento a normas de transparencia pueden presentarse ante:",
    options: ["La UIF", "La CNV", "La Inspeccion General de Justicia exclusivamente", "Solo el mercado autorregulado"],
    correctIndex: 1,
    explanation: "La CNV recibe denuncias por incumplimientos en esta materia."
  },
  {
    id: 24,
    area: "modulo-3",
    prompt: "El Codigo de Conducta Profesional exige actuar con:",
    options: [
      "Lealtad, diligencia y transparencia",
      "Reserva absoluta frente a clientes",
      "Preferencia por clientes mayoristas",
      "Libertad irrestricta en conflictos de interes"
    ],
    correctIndex: 0,
    explanation: "La conducta esperada combina lealtad, diligencia y transparencia."
  },
  {
    id: 25,
    area: "modulo-3",
    prompt: "El regimen informativo ocasional comprende principalmente:",
    options: [
      "Solo estados contables auditados",
      "Hechos relevantes y cambios societarios",
      "Exclusivamente informacion comercial",
      "Unicamente comunicados de dividendos"
    ],
    correctIndex: 1,
    explanation: "La informacion ocasional cubre hechos relevantes y cambios societarios, entre otros."
  },
  {
    id: 26,
    area: "modulo-3",
    prompt: "La publicacion de estados contables anuales debe realizarse, segun la guia, dentro de:",
    options: ["30 dias corridos", "45 dias habiles", "60 dias corridos", "90 dias corridos"],
    correctIndex: 2,
    explanation: "La referencia del material es 60 dias corridos."
  },
  {
    id: 27,
    area: "modulo-3",
    prompt: "¿Cual de las siguientes conductas es contraria a la transparencia?",
    options: [
      "Difundir informacion relevante de manera oportuna",
      "Ocultar informacion relevante a inversores",
      "Responder reclamos por los canales previstos",
      "Designar responsable de relacion con inversores"
    ],
    correctIndex: 1,
    explanation: "Ocultar informacion relevante contradice de forma directa el principio de transparencia."
  },
  {
    id: 28,
    area: "modulo-3",
    prompt: "El deber de informar conflictos de interes se asocia, entre otras normas, con:",
    options: [
      "Ley General de Sociedades, art. 272",
      "Codigo Aduanero",
      "Ley Penal Tributaria",
      "Ley de Defensa del Consumidor exclusivamente"
    ],
    correctIndex: 0,
    explanation: "La guia remite al articulo 272 de la Ley General de Sociedades."
  },
  {
    id: 29,
    area: "modulo-3",
    prompt: "Las obligaciones de gobierno corporativo de una emisora buscan:",
    options: [
      "Evitar toda supervision externa",
      "Asegurar transparencia, equidad y responsabilidad",
      "Concentrar decision en un unico accionista",
      "Reducir el acceso de inversores a la informacion"
    ],
    correctIndex: 1,
    explanation: "Gobierno corporativo apunta a transparencia, equidad y responsabilidad en la gestion."
  },
  {
    id: 30,
    area: "modulo-3",
    prompt: "El procedimiento de reclamos y consultas de inversores se regula en:",
    options: [
      "Normas CNV Titulo XIII",
      "Ley de Cheques",
      "Normas UIF Capitulo I",
      "Codigo Civil art. 146"
    ],
    correctIndex: 0,
    explanation: "La guia menciona Normas CNV Titulo XIII para reclamos y consultas."
  },
  {
    id: 31,
    area: "modulo-4",
    prompt: "La TIR de un proyecto puede describirse como:",
    options: [
      "La tasa que hace cero el VAN",
      "La utilidad contable dividida activos",
      "El interes nominal del bono benchmark",
      "La variacion anual del patrimonio neto"
    ],
    correctIndex: 0,
    explanation: "La TIR es la tasa que iguala el VAN a cero."
  },
  {
    id: 32,
    area: "modulo-4",
    prompt: "Si el VAN de un proyecto es positivo a la tasa de descuento usada, esto sugiere que el proyecto:",
    options: [
      "Destruye valor",
      "Agrega valor",
      "Tiene flujo negativo seguro",
      "Debe rechazarse automaticamente"
    ],
    correctIndex: 1,
    explanation: "Un VAN positivo indica que el proyecto agrega valor bajo esa tasa de descuento."
  },
  {
    id: 33,
    area: "modulo-4",
    prompt: "Si suben las tasas de mercado, el precio de un bono de tasa fija tiende a:",
    options: ["Subir", "Bajar", "No variar nunca", "Igualarse al valor nominal automaticamente"],
    correctIndex: 1,
    explanation: "Precio y rendimiento se mueven en sentido inverso."
  },
  {
    id: 34,
    area: "modulo-4",
    prompt: "La duration se utiliza principalmente para aproximar:",
    options: [
      "La antiguedad del bono",
      "La sensibilidad del precio a cambios en tasas",
      "El monto del interes punitorio",
      "La calificacion crediticia del emisor"
    ],
    correctIndex: 1,
    explanation: "La duration aproxima la sensibilidad del precio frente a movimientos de tasas."
  },
  {
    id: 35,
    area: "modulo-4",
    prompt: "El riesgo de credito de un bono se relaciona con:",
    options: [
      "La posibilidad de incumplimiento del emisor",
      "El spread operativo del mercado",
      "La variacion del tipo de cambio oficial solamente",
      "La frecuencia de pago de dividendos"
    ],
    correctIndex: 0,
    explanation: "El riesgo de credito refiere a la capacidad del emisor de cumplir sus obligaciones."
  },
  {
    id: 36,
    area: "modulo-4",
    prompt: "El valor libro de una accion es igual a:",
    options: [
      "Pasivo total dividido cantidad de acciones",
      "Patrimonio neto dividido cantidad de acciones en circulacion",
      "Activo corriente dividido patrimonio neto",
      "Capital social dividido pasivo total"
    ],
    correctIndex: 1,
    explanation: "La guia define valor libro como patrimonio neto sobre acciones en circulacion."
  },
  {
    id: 37,
    area: "modulo-4",
    prompt: "El valor libro del patrimonio neto equivale a:",
    options: ["Activos mas pasivos", "Activos menos pasivos", "Pasivos menos activos", "Capital social menos reservas"],
    correctIndex: 1,
    explanation: "Patrimonio neto es la diferencia entre activos y pasivos."
  },
  {
    id: 38,
    area: "modulo-4",
    prompt: "Una accion ordinaria representa para el inversor:",
    options: [
      "Un credito con vencimiento cierto",
      "Participacion en el capital de una sociedad",
      "Un deposito a plazo con tasa garantizada",
      "Una caucion bursatil automatica"
    ],
    correctIndex: 1,
    explanation: "La accion implica participacion societaria, no deuda con rendimiento fijo."
  },
  {
    id: 39,
    area: "modulo-4",
    prompt: "La renta variable se distingue de la renta fija porque:",
    options: [
      "Siempre tiene menor volatilidad",
      "No promete un flujo predeterminado",
      "No cotiza en mercados",
      "No requiere analisis de valor"
    ],
    correctIndex: 1,
    explanation: "En renta variable no existe un flujo predeterminado como en deuda."
  },
  {
    id: 40,
    area: "modulo-4",
    prompt: "Cuando existe incertidumbre material sobre empresa en funcionamiento, el asunto en el informe largo o KAM del auditor:",
    options: [
      "Debe incluirse obligatoriamente como KAM comun",
      "Se comunica en seccion separada y no como KAM",
      "No puede informarse",
      "Se reemplaza por una nota interna no publica"
    ],
    correctIndex: 1,
    explanation: "La guia indica que esa incertidumbre se expone en seccion separada, no como KAM."
  },
  {
    id: 41,
    area: "modulo-5",
    prompt: "El Agente de Liquidacion y Compensacion participa principalmente en:",
    options: [
      "Liquidacion y compensacion de operaciones",
      "Inscripcion societaria de emisoras",
      "Auditoria externa obligatoria",
      "Aprobacion de prospectos"
    ],
    correctIndex: 0,
    explanation: "El AlyC se vincula con la etapa de liquidacion y compensacion."
  },
  {
    id: 42,
    area: "modulo-5",
    prompt: "El agente vinculado a custodia, registro y pago de valores negociables es:",
    options: [
      "Agente de Custodia, Registro y Pago",
      "Agente Productor",
      "Agente Asesor Global de Inversion",
      "Agente de Corretaje de Valores Negociables"
    ],
    correctIndex: 0,
    explanation: "La categoria correspondiente es Agente de Custodia, Registro y Pago."
  },
  {
    id: 43,
    area: "modulo-5",
    prompt: "Los mercados y las camaras compensadoras deben denunciar faltas detectadas en sus agentes miembros:",
    options: ["Verdadero", "Falso", "Solo si hay denuncia penal", "Solo en operaciones de contado"],
    correctIndex: 0,
    explanation: "La guia indica que deben denunciar las faltas detectadas en auditorias y controles."
  },
  {
    id: 44,
    area: "modulo-5",
    prompt: "La competencia disciplinaria respecto de los agentes registrados es exclusiva de:",
    options: ["Los mercados", "La CNV", "Las camaras compensadoras", "La UIF"],
    correctIndex: 1,
    explanation: "La guia aclara que la competencia disciplinaria corresponde de forma exclusiva a la CNV."
  },
  {
    id: 45,
    area: "modulo-5",
    prompt: "Las operaciones a plazo firme pueden realizarse, segun la guia, sobre:",
    options: [
      "Cualquier documento crediticio sin restricciones",
      "Solo valores negociables de renta fija y variable, con exclusiones expresas",
      "Solo acciones lideres",
      "Unicamente letras de cambio y pagarés"
    ],
    correctIndex: 1,
    explanation: "Se habilitan sobre ciertos valores negociables de renta fija y variable, con exclusiones."
  },
  {
    id: 46,
    area: "modulo-5",
    prompt: "Las operaciones de pase pueden realizarse:",
    options: [
      "Sobre cualquier activo del mercado",
      "Solo en moneda extranjera",
      "Sobre valores negociables de renta fija y variable con exclusiones",
      "Unicamente sobre cheques de pago diferido"
    ],
    correctIndex: 2,
    explanation: "La guia replica para los pases el criterio de activos permitidos con exclusiones expresas."
  },
  {
    id: 47,
    area: "modulo-5",
    prompt: "En operaciones de pase, el comprador a plazo firme:",
    options: [
      "No puede cancelar anticipadamente",
      "Puede cancelar anticipadamente pagando el mismo importe del vencimiento pactado",
      "Solo cancela si interviene la CNV",
      "Debe vender de inmediato en mercado secundario"
    ],
    correctIndex: 1,
    explanation: "La guia permite cancelacion anticipada bajo ese criterio de pago."
  },
  {
    id: 48,
    area: "modulo-5",
    prompt: "En operaciones de caucion, las acreencias devengadas durante su vigencia corresponden a:",
    options: ["Tomador de fondos", "Colocador", "Mercado", "Agente custodio"],
    correctIndex: 0,
    explanation: "La guia asigna las acreencias de caucion al tomador de fondos."
  },
  {
    id: 49,
    area: "modulo-5",
    prompt: "La supervision, fiscalizacion y control sobre agentes con membresia de mercado:",
    options: [
      "Es exclusiva de la CNV",
      "No es exclusiva de la CNV",
      "Corresponde solo al mercado",
      "Depende unicamente del tipo de cliente"
    ],
    correctIndex: 1,
    explanation: "La guia distingue entre potestad disciplinaria exclusiva de CNV y supervision compartida."
  },
  {
    id: 50,
    area: "modulo-5",
    prompt: "La difusion obligatoria sobre valores negociables en circulacion debe instrumentarse mediante:",
    options: [
      "Un servicio pago para profesionales matriculados",
      "Un mecanismo gratuito y permanente de difusion",
      "Una nota trimestral reservada",
      "Un informe solo para agentes miembros"
    ],
    correctIndex: 1,
    explanation: "La obligacion apunta a acceso libre, gratuito y permanente a informacion relevante."
  },
  {
    id: 51,
    area: "modulo-6",
    prompt: "En un Fondo Comun de Inversion, el inversor adquiere:",
    options: [
      "Acciones de la sociedad gerente",
      "Cuotapartes del patrimonio comun",
      "Bonos emitidos por la depositaria",
      "Una caucion con garantia automatica"
    ],
    correctIndex: 1,
    explanation: "El inversor participa en el patrimonio comun mediante cuotapartes."
  },
  {
    id: 52,
    area: "modulo-6",
    prompt: "La sociedad gerente de un FCI tiene como funcion principal:",
    options: [
      "Administrar el fondo segun su reglamento",
      "Emitir deuda soberana",
      "Auditar externamente al inversor",
      "Sustituir a la CNV"
    ],
    correctIndex: 0,
    explanation: "La gerente administra el fondo conforme reglamento y politica de inversion."
  },
  {
    id: 53,
    area: "modulo-6",
    prompt: "La sociedad depositaria en un FCI se vincula con:",
    options: [
      "Custodia y funciones de control previstas",
      "Asesoramiento tributario del cuotapartista",
      "Sancion disciplinaria de agentes",
      "Fijacion de precios de mercado"
    ],
    correctIndex: 0,
    explanation: "La depositaria cumple tareas de custodia y control dentro del esquema del fondo."
  },
  {
    id: 54,
    area: "modulo-6",
    prompt: "La diversificacion en un FCI busca principalmente:",
    options: [
      "Eliminar todo riesgo",
      "Reducir riesgo no sistematico",
      "Garantizar rentabilidad minima",
      "Evitar la regulacion"
    ],
    correctIndex: 1,
    explanation: "La diversificacion reduce riesgo especifico, pero no elimina todo riesgo."
  },
  {
    id: 55,
    area: "modulo-6",
    prompt: "Un FCI puede obtener autorizacion automatica cuando:",
    options: [
      "Siempre que cambie la politica de inversion",
      "Sea sustancialmente equivalente a otro ya aprobado por la misma gerente",
      "No tenga reglamento de gestion",
      "Este destinado solo a un inversor"
    ],
    correctIndex: 1,
    explanation: "La guia alude a equivalencia sustancial sin cambios en objetivo o politica de inversion."
  },
  {
    id: 56,
    area: "modulo-6",
    prompt: "Los rescates de cuotapartes se rigen principalmente por:",
    options: [
      "El reglamento de gestion y condiciones del producto",
      "La voluntad unilateral del auditor",
      "La ley de sociedades comerciales unicamente",
      "La autorizacion del banco del cliente"
    ],
    correctIndex: 0,
    explanation: "Suscripciones y rescates deben ajustarse al reglamento de gestion y normativa aplicable."
  },
  {
    id: 57,
    area: "modulo-6",
    prompt: "En un fideicomiso financiero, los activos transferidos conforman:",
    options: [
      "El patrimonio personal del fiduciario",
      "Un patrimonio separado",
      "Un pasivo del cuotapartista",
      "Una garantia del mercado"
    ],
    correctIndex: 1,
    explanation: "La estructura fiduciaria se apoya en un patrimonio separado del resto de los patrimonios."
  },
  {
    id: 58,
    area: "modulo-6",
    prompt: "Los fideicomisos financieros destinados al desarrollo de infraestructura deben orientarse a:",
    options: [
      "Desarrollo, inversion o financiamiento de infraestructura",
      "Solo compra de acciones lideres",
      "Prestamos personales de corto plazo",
      "Financiar gastos operativos de agentes"
    ],
    correctIndex: 0,
    explanation: "La guia los vincula con desarrollo, inversion y financiamiento de infraestructura publica o privada."
  },
  {
    id: 59,
    area: "modulo-6",
    prompt: "En fideicomisos financieros destinados al desarrollo inmobiliario, la reapertura del periodo de colocacion:",
    options: [
      "Nunca puede preverse",
      "Puede preverse si esta contemplada en prospecto y contrato, dentro de limites",
      "Depende solo del fiduciario",
      "Solo se admite para emisiones sin oferta publica"
    ],
    correctIndex: 1,
    explanation: "La guia admite reapertura si fue prevista y no excede los limites temporales o de monto."
  },
  {
    id: 60,
    area: "modulo-6",
    prompt: "La principal diferencia entre un FCI y un fideicomiso financiero es que el primero:",
    options: [
      "Emite valores fiduciarios siempre",
      "Se integra con cuotapartes sobre un patrimonio comun administrado",
      "Solo puede invertir en acciones",
      "No esta alcanzado por CNV"
    ],
    correctIndex: 1,
    explanation: "El FCI se estructura mediante cuotapartes de un patrimonio comun; el fideicomiso usa otra arquitectura juridica."
  },
  {
    id: 61,
    area: "modulo-1",
    concept: "tribunal arbitral",
    prompt: "Segun la guia, la funcion del Tribunal Arbitral en el mercado de capitales es:",
    options: [
      "Determinar tasas de interes de referencia",
      "Resolver controversias entre participantes del mercado",
      "Aprobar estados contables de emisoras",
      "Sancionar penalmente a los agentes"
    ],
    correctIndex: 1,
    explanation: "La guia asocia el Tribunal Arbitral con la resolucion de controversias entre participantes."
  },
  {
    id: 62,
    area: "modulo-1",
    concept: "plazo OPA CNV",
    prompt: "¿Que plazo tiene la CNV para resolver la solicitud de autorizacion de una OPA?",
    options: ["5 dias habiles", "10 dias habiles", "20 dias habiles", "30 dias corridos"],
    correctIndex: 2,
    explanation: "La guia ubica en 20 dias habiles el plazo de resolucion de la solicitud de OPA."
  },
  {
    id: 63,
    area: "modulo-1",
    concept: "incumplimiento OPA",
    prompt: "Si el oferente incumple la obligacion de formular una OPA, la CNV puede:",
    options: [
      "Convalidar la operacion si hubo buena fe",
      "Disponer la subasta de las participaciones adquiridas",
      "Reemplazar al directorio de la emisora",
      "Autorizar una oferta privada compensatoria"
    ],
    correctIndex: 1,
    explanation: "La guia indica que la CNV puede disponer la subasta de las participaciones adquiridas."
  },
  {
    id: 64,
    area: "modulo-1",
    concept: "aporte irrevocable",
    prompt: "Los aportes irrevocables a cuenta de futuras emisiones deben:",
    options: [
      "Aplicarse siempre a dividendos",
      "Tener contrapartida en un rubro de alta liquidez",
      "Capitalizarse en 30 dias corridos",
      "Usarse solo para cancelar pasivos bancarios"
    ],
    correctIndex: 1,
    explanation: "La guia exige que tengan contrapartida en un rubro de alta liquidez."
  },
  {
    id: 65,
    area: "modulo-2",
    concept: "beneficiario final",
    prompt: "Dentro de una debida diligencia robusta, identificar al beneficiario final sirve para:",
    options: [
      "Reducir el costo operativo del agente",
      "Entender quien controla o se beneficia realmente de la estructura",
      "Evitar cualquier pedido documental futuro",
      "Reemplazar el perfil transaccional del cliente"
    ],
    correctIndex: 1,
    explanation: "Identificar al beneficiario final ayuda a comprender control y beneficio economico real."
  },
  {
    id: 66,
    area: "modulo-2",
    concept: "perfil transaccional",
    prompt: "El perfil transaccional de un cliente se utiliza principalmente para:",
    options: [
      "Definir de antemano la rentabilidad esperada",
      "Comparar operaciones reales con comportamiento esperado",
      "Excluir al cliente de monitoreos futuros",
      "Sustituir la documentacion respaldatoria"
    ],
    correctIndex: 1,
    explanation: "El perfil permite evaluar si las operaciones observadas son coherentes con lo esperado."
  },
  {
    id: 67,
    area: "modulo-2",
    concept: "alertas PLAFT",
    prompt: "Una alerta PLAFT razonable suele dispararse cuando:",
    options: [
      "La operatoria coincide con el perfil declarado",
      "Existe una desviacion significativa respecto del comportamiento esperado",
      "El cliente opera con instrumentos regulados",
      "El agente actualiza el legajo en plazo"
    ],
    correctIndex: 1,
    explanation: "Las alertas surgen ante desajustes relevantes entre perfil esperado y operatoria observada."
  },
  {
    id: 68,
    area: "modulo-2",
    concept: "monitoreo continuo",
    prompt: "El monitoreo continuo en PLAFT implica:",
    options: [
      "Revisar solo clientes nuevos durante 30 dias",
      "Actualizar informacion y revisar consistencia a lo largo de la relacion",
      "Suspender controles si el cliente nunca reporto problemas",
      "Evaluar unicamente operaciones en efectivo"
    ],
    correctIndex: 1,
    explanation: "El monitoreo es continuo: incluye actualizacion de legajos y control de consistencia."
  },
  {
    id: 69,
    area: "modulo-3",
    concept: "informacion relevante",
    prompt: "Frente a informacion material para inversores, la conducta correcta es:",
    options: [
      "Retenerla hasta la proxima asamblea",
      "Divulgarla de manera oportuna y equitativa",
      "Compartirla primero con clientes preferentes",
      "Esperar confirmacion de resultados economicos"
    ],
    correctIndex: 1,
    explanation: "La transparencia exige divulgacion oportuna y trato equitativo de la informacion."
  },
  {
    id: 70,
    area: "modulo-3",
    concept: "ambito de transparencia",
    prompt: "Las reglas de transparencia en oferta publica buscan principalmente:",
    options: [
      "Reducir competencia entre agentes",
      "Proteger integridad del mercado y decisiones informadas del inversor",
      "Aumentar discrecionalidad del emisor",
      "Reservar informacion para analistas profesionales"
    ],
    correctIndex: 1,
    explanation: "La transparencia protege integridad de mercado y calidad de decision del inversor."
  },
  {
    id: 71,
    area: "modulo-3",
    concept: "reclamos y consultas",
    prompt: "Un reclamo de inversor se diferencia de una denuncia porque normalmente:",
    options: [
      "No puede presentarse ante la CNV",
      "Apunta a una disconformidad o consulta sobre servicio o trato recibido",
      "Solo procede si existe delito penal",
      "Siempre requiere patrocinio letrado"
    ],
    correctIndex: 1,
    explanation: "El reclamo o consulta apunta a resolver una disconformidad o inquietud del inversor."
  },
  {
    id: 72,
    area: "modulo-3",
    concept: "conflictos de interes",
    prompt: "Frente a un conflicto de interes, la conducta compatible con el codigo profesional es:",
    options: [
      "Ocultarlo si no afecta honorarios",
      "Informarlo y gestionarlo con transparencia",
      "Priorizar siempre al empleador sobre el cliente",
      "Delegarlo informalmente en otro agente"
    ],
    correctIndex: 1,
    explanation: "El conflicto debe informarse y gestionarse de modo transparente."
  },
  {
    id: 73,
    area: "modulo-4",
    concept: "riesgo de liquidez",
    prompt: "El riesgo de liquidez en renta fija se vincula con:",
    options: [
      "La dificultad para vender o comprar sin afectar significativamente el precio",
      "La probabilidad de quiebra del auditor",
      "El calculo del cupon corrido",
      "La existencia de dividendos preferidos"
    ],
    correctIndex: 0,
    explanation: "El riesgo de liquidez refiere a dificultad de desarme o ingreso sin impacto relevante en precio."
  },
  {
    id: 74,
    area: "modulo-4",
    concept: "riesgo de reinversion",
    prompt: "El riesgo de reinversion aparece cuando:",
    options: [
      "Los flujos cobrados deben reinvertirse a tasas menores a las esperadas",
      "El emisor cambia su denominacion social",
      "El mercado suspende todas las negociaciones",
      "Aumenta el capital social de la empresa"
    ],
    correctIndex: 0,
    explanation: "Existe riesgo de reinversion si los flujos se recolocan a tasas menos convenientes."
  },
  {
    id: 75,
    area: "modulo-4",
    concept: "ajuste por inflacion",
    prompt: "El ajuste por inflacion a efectos de exposicion requiere presentar:",
    options: [
      "Solo el ejercicio actual ajustado",
      "El ejercicio anterior reexpresado y el actual ajustado",
      "Solo notas explicativas sin reexpresion",
      "El balance historico mas una nota complementaria"
    ],
    correctIndex: 1,
    explanation: "La guia exige presentar ejercicio anterior reexpresado y ejercicio actual ajustado."
  },
  {
    id: 76,
    area: "modulo-4",
    concept: "registro de auditores",
    prompt: "El Registro de Auditores Externos de la CNV es:",
    options: [
      "Reservado y solo accesible a emisoras",
      "Publico y consultable en el sitio web de la CNV",
      "Exclusivo para asociaciones profesionales",
      "Administrado por los mercados sin intervencion de CNV"
    ],
    correctIndex: 1,
    explanation: "La guia indica que el registro es publico y accesible en el sitio web de la CNV."
  },
  {
    id: 77,
    area: "modulo-5",
    concept: "agente productor",
    prompt: "El Agente Productor se vincula principalmente con:",
    options: [
      "Captacion y vinculacion comercial dentro del marco regulatorio aplicable",
      "Liquidacion y compensacion final de operaciones",
      "Custodia legal de valores negociables",
      "Aprobacion de listados de mercado"
    ],
    correctIndex: 0,
    explanation: "El agente productor participa en la originacion y vinculacion comercial, no en la liquidacion final."
  },
  {
    id: 78,
    area: "modulo-5",
    concept: "agente asesor global",
    prompt: "El Agente Asesor Global de Inversion cumple una funcion asociada a:",
    options: [
      "Asesoramiento de inversiones dentro de su categoria regulada",
      "Custodia centralizada de todos los instrumentos",
      "Homologacion de balances de emisoras",
      "Sancion automatica de operaciones sospechosas"
    ],
    correctIndex: 0,
    explanation: "Su funcion se vincula con asesoramiento de inversiones conforme su categoria y limites."
  },
  {
    id: 79,
    area: "modulo-5",
    concept: "plataformas de acceso libre",
    prompt: "Exigir plataformas de acceso libre para informacion de pagos de instrumentos PyME busca:",
    options: [
      "Restringir informacion a agentes registrados",
      "Garantizar acceso publico gratuito y actualizado",
      "Eliminar la responsabilidad del Agente de Custodia, Registro y Pago",
      "Sustituir el prospecto de emision"
    ],
    correctIndex: 1,
    explanation: "La finalidad es reducir asimetrias mediante acceso publico gratuito y actualizado."
  },
  {
    id: 80,
    area: "modulo-5",
    concept: "oferta irregular de servicios",
    prompt: "Constituye oferta irregular en el mercado:",
    options: [
      "Ofrecer publicamente servicios o valores sin autorizacion de la CNV",
      "Negociar valores autorizados en mercado habilitado",
      "Publicar hechos relevantes dentro de plazo",
      "Registrar operaciones a traves de un AlyC"
    ],
    correctIndex: 0,
    explanation: "La oferta publica sin autorizacion encuadra como irregular."
  },
  {
    id: 81,
    area: "modulo-6",
    concept: "reglamento de gestion",
    prompt: "El reglamento de gestion de un FCI cumple, entre otras funciones, la de:",
    options: [
      "Definir politica de inversion y reglas operativas del fondo",
      "Sustituir la custodia de la depositaria",
      "Fijar sanciones penales para cuotapartistas",
      "Eliminar la necesidad de informacion al inversor"
    ],
    correctIndex: 0,
    explanation: "El reglamento organiza politica de inversion, funcionamiento y relacion con cuotapartistas."
  },
  {
    id: 82,
    area: "modulo-6",
    concept: "equivalencia de FCI",
    prompt: "La equivalencia sustancial entre fondos, a efectos de autorizacion automatica, implica que:",
    options: [
      "No cambien objetivo ni politica de inversion relevantes",
      "Todos los fondos de una gerente sean automaticamente equivalentes",
      "Solo importe la denominacion comercial",
      "No existan diferencias en comisiones"
    ],
    correctIndex: 0,
    explanation: "La guia remite a equivalencia sustancial sin cambios en objetivo o politica de inversion."
  },
  {
    id: 83,
    area: "modulo-6",
    concept: "infraestructura en fideicomisos",
    prompt: "Un producto de inversion colectiva para infraestructura puede destinarse:",
    options: [
      "Directa o indirectamente al desarrollo o financiamiento de infraestructura",
      "Solo a capital de trabajo de agentes",
      "Exclusivamente a operaciones de pase",
      "Solo a titulos publicos de corto plazo"
    ],
    correctIndex: 0,
    explanation: "La definicion incluye desarrollo, inversion y financiamiento de infraestructura."
  },
  {
    id: 84,
    area: "modulo-6",
    concept: "pluralidad de fiduciantes",
    prompt: "En emisiones con pluralidad de fiduciantes PyME CNV, un criterio relevante del material es que:",
    options: [
      "Al menos 70% del activo fideicomitido provenga de fiduciantes que califiquen como PyME CNV",
      "Todos los fiduciantes sean personas humanas",
      "No exista prospecto de oferta publica",
      "Solo participen sociedades listadas en el exterior"
    ],
    correctIndex: 0,
    explanation: "La guia contempla el umbral del 70% del activo fideicomitido en ese supuesto."
  },
  {
    id: 85,
    area: "modulo-1",
    concept: "definicion de oferta publica",
    subtopic: "oferta publica",
    prompt: "Segun la guia, la oferta publica se entiende como:",
    options: [
      "Una propuesta dirigida solo a accionistas de control",
      "Una oferta dirigida al publico en general o a sectores indeterminados",
      "Una colocacion reservada a inversores institucionales",
      "Una venta de valores entre partes relacionadas"
    ],
    correctIndex: 1,
    explanation: "La oferta publica se caracteriza por dirigirse al publico o a sectores indeterminados."
  },
  {
    id: 86,
    area: "modulo-1",
    concept: "plazo autoridades emisora",
    subtopic: "emisoras",
    prompt: "¿Que plazo tiene una emisora para informar la designacion de autoridades a la CNV?",
    options: ["24 horas", "5 dias habiles", "10 dias habiles", "20 dias habiles"],
    correctIndex: 2,
    explanation: "La guia fija 10 dias habiles para informar la designacion de autoridades."
  },
  {
    id: 87,
    area: "modulo-1",
    concept: "cancelacion de oferta publica",
    subtopic: "emisoras",
    prompt: "Si la emisora no coloca los valores autorizados dentro del plazo previsto:",
    options: [
      "La CNV cancela la autorizacion de oferta publica",
      "El mercado asume la colocacion",
      "Se prorroga automaticamente por un año",
      "Solo se aplica una observacion formal"
    ],
    correctIndex: 0,
    explanation: "La guia indica que la CNV cancela la autorizacion cuando no se colocan en plazo."
  },
  {
    id: 88,
    area: "modulo-1",
    concept: "sancion maxima ley 26831",
    subtopic: "sanciones",
    prompt: "La sancion maxima prevista por la Ley 26.831 para incumplimientos graves puede llegar a:",
    options: [
      "Una amonestacion publica",
      "Multa hasta el quintuplo del beneficio obtenido",
      "Suspension de tres dias habiles",
      "Cancelacion automatica de toda sociedad"
    ],
    correctIndex: 1,
    explanation: "La guia menciona la multa de hasta el quintuplo del beneficio obtenido."
  },
  {
    id: 89,
    area: "modulo-1",
    concept: "capitalizacion de aportes irrevocables",
    subtopic: "asambleas",
    prompt: "La asamblea debe tratar la capitalizacion de aportes irrevocables dentro de:",
    options: ["90 dias", "6 meses", "12 meses", "2 ejercicios"],
    correctIndex: 1,
    explanation: "La guia ubica en 6 meses el plazo para el tratamiento en asamblea."
  },
  {
    id: 90,
    area: "modulo-1",
    concept: "trato igualitario en acciones propias",
    subtopic: "emisoras",
    prompt: "La adquisicion de acciones propias por parte de una emisora debe regirse por:",
    options: [
      "Prioridad del accionista controlador",
      "Trato igualitario entre todos los accionistas",
      "Autorizacion del mercado extranjero",
      "Libertad de precio sin transparencia"
    ],
    correctIndex: 1,
    explanation: "La guia destaca el trato igualitario entre accionistas como principio rector."
  },
  {
    id: 91,
    area: "modulo-2",
    concept: "simulacion de licitud",
    subtopic: "lavado de activos",
    prompt: "El concepto de simulacion de licitud en PLAFT alude a:",
    options: [
      "Dar apariencia legal a fondos o activos de origen ilicito",
      "Reducir el costo fiscal de una operacion",
      "Registrar operaciones solo con respaldo documental",
      "Cambiar el mercado de negociacion del instrumento"
    ],
    correctIndex: 0,
    explanation: "La simulacion de licitud es el corazon del concepto de lavado de activos."
  },
  {
    id: 92,
    area: "modulo-2",
    concept: "origen de fondos",
    subtopic: "debida diligencia",
    prompt: "Consultar y documentar el origen de fondos sirve principalmente para:",
    options: [
      "Eliminar el monitoreo posterior",
      "Evaluar coherencia economica de la operatoria",
      "Aumentar automaticamente el perfil de riesgo",
      "Reemplazar el legajo del cliente"
    ],
    correctIndex: 1,
    explanation: "Conocer origen de fondos ayuda a medir coherencia y riesgo de la operatoria."
  },
  {
    id: 93,
    area: "modulo-2",
    concept: "autoridades de supervision",
    subtopic: "normativa aplicable",
    prompt: "En materia PLAFT dentro del mercado de capitales, la CNV actua como:",
    options: [
      "Autoridad de supervision en su ambito",
      "Unico organismo de aplicacion penal",
      "Mercado autorregulado",
      "Depositaria central obligatoria"
    ],
    correctIndex: 0,
    explanation: "La CNV interviene como autoridad de supervision sobre sujetos alcanzados en su orbita."
  },
  {
    id: 94,
    area: "modulo-2",
    concept: "financiamiento del terrorismo",
    subtopic: "diferencias conceptuales",
    prompt: "En financiamiento del terrorismo, el punto critico de analisis suele estar en:",
    options: [
      "El destino de los fondos",
      "La especie negociable utilizada",
      "La moneda de la cuenta",
      "El domicilio del agente exclusivamente"
    ],
    correctIndex: 0,
    explanation: "A diferencia del lavado, aqui importa centralmente el destino de los fondos."
  },
  {
    id: 95,
    area: "modulo-2",
    concept: "actualizacion de legajos",
    subtopic: "monitoreo",
    prompt: "La actualizacion de legajos en PLAFT debe entenderse como:",
    options: [
      "Un tramite excepcional que casi nunca corresponde",
      "Parte del monitoreo continuo segun riesgo del cliente",
      "Una obligacion exclusiva de la UIF",
      "Un requisito solo para no residentes"
    ],
    correctIndex: 1,
    explanation: "Actualizar legajos forma parte del monitoreo continuo basado en riesgo."
  },
  {
    id: 96,
    area: "modulo-2",
    concept: "perfil del cliente",
    subtopic: "debida diligencia",
    prompt: "Conocer el perfil del cliente permite al sujeto obligado:",
    options: [
      "Eliminar revisiones manuales",
      "Comparar actividad declarada con operatoria efectiva",
      "Garantizar ausencia total de riesgo",
      "Aprobar automaticamente toda transaccion"
    ],
    correctIndex: 1,
    explanation: "El perfil es una referencia para medir coherencia entre lo declarado y lo observado."
  },
  {
    id: 97,
    area: "modulo-3",
    concept: "regimen informativo periodico",
    subtopic: "informacion periodica",
    prompt: "El regimen informativo periodico de emisoras se asocia con:",
    options: [
      "Normas CNV Titulo IV",
      "Ley 24.083 de FCI",
      "Normas UIF Titulo XIII",
      "Codigo Penal"
    ],
    correctIndex: 0,
    explanation: "La guia remite a Normas CNV Titulo IV para el regimen informativo periodico."
  },
  {
    id: 98,
    area: "modulo-3",
    concept: "hechos relevantes",
    subtopic: "informacion ocasional",
    prompt: "Dentro del regimen informativo ocasional, lo central es comunicar:",
    options: [
      "Hechos relevantes y cambios societarios",
      "Solo resultados positivos trimestrales",
      "Unicamente modificaciones de logo comercial",
      "Solo decisiones ya inscriptas en IGJ"
    ],
    correctIndex: 0,
    explanation: "La informacion ocasional cubre hechos relevantes y cambios societarios."
  },
  {
    id: 99,
    area: "modulo-3",
    concept: "denuncias ante CNV",
    subtopic: "denuncias y reclamos",
    prompt: "Una denuncia por falta de transparencia debe orientarse a:",
    options: [
      "Canalizar un posible incumplimiento normativo",
      "Solicitar una recomendacion de inversion",
      "Pedir cambios en la politica de dividendos",
      "Reclamar un reintegro bancario"
    ],
    correctIndex: 0,
    explanation: "La denuncia apunta a hechos que puedan implicar incumplimiento normativo."
  },
  {
    id: 100,
    area: "modulo-3",
    concept: "principios de gobierno corporativo",
    subtopic: "gobierno corporativo",
    prompt: "Los principios de gobierno corporativo incluyen especialmente:",
    options: [
      "Transparencia, equidad y responsabilidad",
      "Reserva, discrecionalidad y velocidad",
      "Centralizacion absoluta y secreto",
      "Preferencia por insiders informados"
    ],
    correctIndex: 0,
    explanation: "La guia destaca transparencia, equidad y responsabilidad como ejes."
  },
  {
    id: 101,
    area: "modulo-3",
    concept: "codigo de conducta con clientes",
    subtopic: "conducta profesional",
    prompt: "El codigo de conducta profesional frente a clientes exige:",
    options: [
      "Lealtad, diligencia y transparencia",
      "Priorizar intereses propios del agente",
      "Reservar toda informacion relevante",
      "Aceptar conflictos de interes no revelados"
    ],
    correctIndex: 0,
    explanation: "La conducta exigida frente a clientes combina lealtad, diligencia y transparencia."
  },
  {
    id: 102,
    area: "modulo-3",
    concept: "publicacion de estados contables",
    subtopic: "informacion periodica",
    prompt: "La publicacion de estados contables anuales dentro del plazo reglamentario busca:",
    options: [
      "Garantizar acceso oportuno a informacion relevante",
      "Reducir la competencia entre emisoras",
      "Evitar todo reclamo de inversores",
      "Reemplazar los hechos relevantes"
    ],
    correctIndex: 0,
    explanation: "La razon de fondo es brindar informacion util y oportuna al inversor."
  },
  {
    id: 103,
    area: "modulo-4",
    concept: "NIIF y normas locales",
    subtopic: "contabilidad",
    prompt: "Una diferencia comun entre valor historico y valor corriente apunta a:",
    options: [
      "La base usada para medir y exponer activos o pasivos",
      "La moneda de cotizacion del instrumento",
      "El tipo de agente interviniente",
      "La forma de presentar reclamos"
    ],
    correctIndex: 0,
    explanation: "La diferencia se relaciona con la base de medicion contable y de valuacion."
  },
  {
    id: 104,
    area: "modulo-4",
    concept: "riesgo de tipo de cambio",
    subtopic: "renta fija",
    prompt: "El riesgo de tipo de cambio en una inversion aparece cuando:",
    options: [
      "Los flujos o el precio dependen de variaciones de moneda",
      "El bono no paga cupon",
      "La accion distribuye dividendos",
      "El auditor modifica su informe"
    ],
    correctIndex: 0,
    explanation: "Existe riesgo cambiario cuando el valor de la inversion queda expuesto a movimientos de moneda."
  },
  {
    id: 105,
    area: "modulo-4",
    concept: "analisis fundamental",
    subtopic: "renta variable",
    prompt: "El analisis fundamental de acciones busca principalmente:",
    options: [
      "Estimar valor economico a partir de informacion de la empresa y su contexto",
      "Reemplazar toda informacion contable",
      "Determinar sanciones por incumplimientos",
      "Definir el plazo minimo de una OPA"
    ],
    correctIndex: 0,
    explanation: "El analisis fundamental usa informacion economica y financiera para aproximar valor."
  },
  {
    id: 106,
    area: "modulo-4",
    concept: "seguridad razonable auditoria",
    subtopic: "auditoria",
    prompt: "El sistema de gestion de calidad de una firma de auditoria debe proporcionar:",
    options: [
      "Seguridad razonable de cumplimiento profesional y legal",
      "Garantia absoluta de ausencia de errores",
      "Rentabilidad minima para emisoras auditadas",
      "Cobertura cambiaria integral"
    ],
    correctIndex: 0,
    explanation: "La guia habla de seguridad razonable, no absoluta, sobre cumplimiento y adecuacion del informe."
  },
  {
    id: 107,
    area: "modulo-4",
    concept: "causal exclusion auditores",
    subtopic: "auditoria",
    prompt: "Es causal de exclusion del Registro de Auditores Externos de CNV:",
    options: [
      "Ser sancionado con inhabilitacion por la CNV",
      "Publicar estados contables en plazo",
      "Aplicar ajuste por inflacion",
      "Inscribirse en el registro publico"
    ],
    correctIndex: 0,
    explanation: "La guia menciona la inhabilitacion aplicada por CNV como causal de exclusion."
  },
  {
    id: 108,
    area: "modulo-4",
    concept: "formacion de precios",
    subtopic: "renta variable",
    prompt: "La formacion de precios en renta variable refleja, entre otros factores:",
    options: [
      "Expectativas, informacion disponible y percepcion de riesgo",
      "Solo el valor nominal de la accion",
      "Exclusivamente el capital social historico",
      "La tasa de una caucion bursatil"
    ],
    correctIndex: 0,
    explanation: "Los precios de acciones reflejan expectativas, informacion y riesgo, no un unico dato fijo."
  },
  {
    id: 109,
    area: "modulo-5",
    concept: "mercados y camaras",
    subtopic: "instituciones",
    prompt: "Mercados y camaras compensadoras dentro del ecosistema cumplen, entre otras funciones, la de:",
    options: [
      "Supervisar y controlar operativamente a sus miembros",
      "Sustituir a la UIF en reportes ROS",
      "Aprobar prospectos de emisoras",
      "Administrar patrimonios separados fiduciarios"
    ],
    correctIndex: 0,
    explanation: "La guia les asigna tareas de supervision y control operativo sobre sus miembros."
  },
  {
    id: 110,
    area: "modulo-5",
    concept: "valores negociables clasificacion",
    subtopic: "instrumentos",
    prompt: "La clasificacion de valores negociables dentro del modulo V ayuda principalmente a:",
    options: [
      "Distinguir naturaleza y tratamiento operativo de los instrumentos",
      "Definir sanciones penales",
      "Reemplazar el analisis de riesgo",
      "Evitar la liquidacion y compensacion"
    ],
    correctIndex: 0,
    explanation: "Clasificar instrumentos ayuda a entender su tratamiento y operatoria."
  },
  {
    id: 111,
    area: "modulo-5",
    concept: "agente de deposito colectivo",
    subtopic: "agentes",
    prompt: "El Agente de Deposito Colectivo se asocia especialmente con:",
    options: [
      "Custodia y registro centralizado de valores negociables",
      "Asesoramiento global de inversiones",
      "Calificacion de riesgo crediticio",
      "Procedimiento sancionatorio de CNV"
    ],
    correctIndex: 0,
    explanation: "Su funcion se vincula con custodia y registro centralizado."
  },
  {
    id: 112,
    area: "modulo-5",
    concept: "agencias de calificacion",
    subtopic: "agentes",
    prompt: "Una agencia de calificacion de riesgo interviene principalmente para:",
    options: [
      "Emitir opiniones tecnicas sobre riesgo crediticio",
      "Liquidar operaciones de mercado",
      "Recibir denuncias de inversores",
      "Administrar fondos comunes de inversion"
    ],
    correctIndex: 0,
    explanation: "Las calificadoras emiten opiniones sobre riesgo crediticio dentro de su marco regulado."
  },
  {
    id: 113,
    area: "modulo-5",
    concept: "hacedor de mercado",
    subtopic: "operaciones",
    prompt: "Un hacedor de mercado debe mantener ofertas simultaneas de compra y venta respetando condiciones reglamentarias:",
    options: ["Verdadero", "Falso", "Solo en fideicomisos", "Solo fuera de horario"],
    correctIndex: 0,
    explanation: "La guia lo presenta como una obligacion propia del rol de market maker."
  },
  {
    id: 114,
    area: "modulo-5",
    concept: "garantias operativas",
    subtopic: "liquidacion y compensacion",
    prompt: "Las garantias en la operatoria bursatil buscan principalmente:",
    options: [
      "Respaldar cumplimiento de operaciones y administrar riesgo",
      "Aumentar discrecionalidad del agente",
      "Evitar toda registracion de operaciones",
      "Reemplazar el control de mercado"
    ],
    correctIndex: 0,
    explanation: "Las garantias cumplen una funcion de cobertura y administracion del riesgo operativo."
  },
  {
    id: 115,
    area: "modulo-6",
    concept: "definicion de FCI",
    subtopic: "fondos comunes de inversion",
    prompt: "Un Fondo Comun de Inversion puede describirse como:",
    options: [
      "Un patrimonio comun administrado profesionalmente y dividido en cuotapartes",
      "Una accion preferida emitida por la sociedad gerente",
      "Una caucion respaldada por el mercado",
      "Un contrato individual de deposito bancario"
    ],
    correctIndex: 0,
    explanation: "La definicion central del FCI refiere a patrimonio comun administrado profesionalmente."
  },
  {
    id: 116,
    area: "modulo-6",
    concept: "suscripcion y rescate",
    subtopic: "operatoria FCI",
    prompt: "La entrada y salida del inversor en un FCI se da, respectivamente, a traves de:",
    options: [
      "Suscripcion y rescate",
      "OPA y DUVA",
      "Pase y caucion",
      "Emision y amortizacion obligatoria"
    ],
    correctIndex: 0,
    explanation: "En FCI el inversor ingresa por suscripcion y sale por rescate."
  },
  {
    id: 117,
    area: "modulo-6",
    concept: "ventajas y desventajas FCI",
    subtopic: "fondos comunes de inversion",
    prompt: "Una ventaja tipica de los FCI es:",
    options: [
      "Acceso a diversificacion y administracion profesional",
      "Ausencia total de riesgo",
      "Garantia estatal de retorno",
      "Eliminacion del reglamento de gestion"
    ],
    correctIndex: 0,
    explanation: "La diversificacion y gestion profesional son ventajas habituales del instrumento."
  },
  {
    id: 118,
    area: "modulo-6",
    concept: "fideicomiso financiero",
    subtopic: "fideicomisos",
    prompt: "En un fideicomiso financiero, los valores fiduciarios se emiten sobre la base de:",
    options: [
      "Un patrimonio separado afectado al contrato",
      "El patrimonio personal de los inversores",
      "Solo capital social del fiduciario",
      "Una caucion bursatil previa"
    ],
    correctIndex: 0,
    explanation: "Los valores fiduciarios se apoyan en el patrimonio separado del fideicomiso."
  },
  {
    id: 119,
    area: "modulo-6",
    concept: "objetivo y politica de inversion",
    subtopic: "autorizacion automatica",
    prompt: "En autorizacion automatica de FCI, un cambio en objetivo o politica de inversion:",
    options: [
      "Puede impedir considerar equivalente al nuevo fondo",
      "Nunca tiene importancia regulatoria",
      "Se presume irrelevante",
      "Solo importa si cambia el nombre del fondo"
    ],
    correctIndex: 0,
    explanation: "La equivalencia sustancial cae si cambian objetivo o politica de inversion relevantes."
  },
  {
    id: 120,
    area: "modulo-6",
    concept: "documentacion aplicable productos colectivos",
    subtopic: "documentacion",
    prompt: "En productos de inversion colectiva, la documentacion clave para el inversor incluye principalmente:",
    options: [
      "Reglamento de gestion y/o prospecto segun el vehiculo",
      "Solo el estatuto del mercado",
      "Unicamente la ultima orden de compra",
      "La carta organica del BCRA"
    ],
    correctIndex: 0,
    explanation: "La guia resalta reglamento de gestion y prospecto como documentos centrales segun el producto."
  }
];
