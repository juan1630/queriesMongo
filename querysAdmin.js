db.ventasservicios
.aggregate([
    {$group:{_id: '$vendedor', totalCompra: {$sum:'$totalCompra'}}},
    // { $group: {_id: '', total: {$sum: '$totalCompra' } } } esta linea hace el count de los totales
    ])
    .sort({totalCompra: -1})
    
    
//db.ventasservicios.find().count();



//consultas 

db.consultahistoricos.find({doctorAPasar: 'David Reyes'}).sort({fechaIngreso: -1})