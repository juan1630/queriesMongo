db.ventasservicios
.aggregate([
    {$group:{_id: '$vendedor', totalCompra: {$sum:'$totalCompra'}}},
    // { $group: {_id: '', total: {$sum: '$totalCompra' } } } esta linea hace el count de los totales
    ])
    .sort({totalCompra: -1})
    
    
//db.ventasservicios.find().count();



//consultas 

db.consultahistoricos.find({doctorAPasar: 'David Reyes'}).sort({fechaIngreso: -1})

//condicional para traer los pacientes excluidos y dejarlos disponibles
db.bancosangres.aggregate([
    {
        $project:{
            
           estatus: {
           
               $cond: { 
                   
                if: {
                    $gte: ["$fecha_termino", Date() ], 
                   },

                   then : "TERMINADO", 
                    else : 'AUN NO' 
                       
                   }
           }
         } 
    }
   ]);