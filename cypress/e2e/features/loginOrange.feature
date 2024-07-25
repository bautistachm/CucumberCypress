Feature: Acceso al menu principal 

    Scenario: Login invalido por usuario incorrecto
    Given el usuario ingresa a la pagina del login
    When se digita el usuario incorrecto
    And se digita la contraseña correcta
    Then el usuario no puede ingresar sesion


    Scenario: Login invalido por contraseña incorrecto
    Given el usuario ingresa a la pagina del login
    When se digita el usuario correcto
    And se digita la contraseña incorrecta
    Then el usuario no puede ingresar sesion


    Scenario: Login exitoso
    Given el usuario ingresa a la pagina del login
    When se digita el usuario correcto
    And se digita la contraseña correcta
    Then el usuario puede ingresar sesion