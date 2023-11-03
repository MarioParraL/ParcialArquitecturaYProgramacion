# ParcialArquitecturaYProgramacion

# ENDPOINTS

# GET /api/monumentos: Obtiene una lista de todos los monumentos, indicando (solo) id, nombre y país (1.5 puntos).

# GET /api/monumentos/:id: Obtiene información detallada (id, nombre, descripción, páis, ciudad, etc. ) de un monumento según su id - la climatología y la hora deben ser las del momento de realizar la consulta - (3.5 puntos).

# En caso de no existir el monumento con id indicado, devolverá un error 404

# POST /api/monumentos: Crea un nuevo monumento (2 puntos).

# Si ya existe ese nombre, en el mismo código postal, en la DDBB devolverá un error 400.

# Si falta alguno de los datos o algún dato es erróneo devolverá un error 500

# PUT /api/monumentos/:id: Actualiza la información de un contacto por su id (2 puntos).

# En caso de no existir el monumento con id indicado, devolverá un error 404

# DELETE /api/monumentos/:id: Borra un contacto por su id (1 punto).

# En caso de no existir el monumento con id indicado, devolverá un error 404
