import { FormGroup } from '@angular/forms';

/// Descripción: Clase para consultar mensajes de error para los elementos del formulario.
export class ErrorFormulario {

    /// --------------------------------------------------------------------------------    
    /// <param name="p_form"> OBJETO FORMULARIO A VALIDAR </param>
    /// <param name="p_control"> NOMBRE DEL CONTROL A VALIDAR </param>
    /// <returns>
    /// </returns>
    /// --------------------------------------------------------------------------------
    ObtieneMensajeError(p_form: FormGroup, p_control: any) {

        let mensaje = '';

        mensaje =
            p_form.get(p_control)!.hasError('required') ? 'El campo es requerido' :
                p_form.get(p_control)!.hasError('email') ? 'No es una cuenta de correo válida' :
                    p_form.get(p_control)!.hasError('maxlength') ?
                        `Longitud máxima requerida : ${p_form.get(p_control)!.getError('maxlength')
                            .requiredLength}` :
                        p_form.get(p_control)!.hasError('minlength') ?
                            `Longitud mínima requerida :
                            ${p_form.get(p_control)!.getError('minlength')
                                .requiredLength}` :
                            p_form.get(p_control)!.getError('soloNumeros') ?
                                `El control solo admite números` :
                                p_form.get(p_control)!.getError('soloLetras') ?
                                    'El control solo admite letras' :
                                    p_form.get(p_control)!.getError('letrasNumeros') ?
                                        'El control no admite caracteres especiales' :
                                        p_form.get(p_control)!.getError('CaracteresTablaCatalogo') ?
                                            'Caracter no válidos' :
                                            p_form.get(p_control)!.getError('numeroCuenta') ?
                                                p_form.get(p_control)!.getError('numeroCuenta') :
                                                '';
        return mensaje;
    }

}