import Swal from 'sweetalert2';

export class Alertas 
{

    ToastError(mensaje: string)
    {
        let Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true
        });

        Toast.fire({
            icon: 'error',
            title: mensaje
        });
    }

    ToastExito(mensaje: string)
    {
        let Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true
        });

        Toast.fire({
            icon: 'success',
            title: mensaje
        });
    }


    ToastWarning(mensaje: string)
    {
        let Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true
        });

        Toast.fire({
            icon: 'warning',
            title: mensaje
        });
    }
}