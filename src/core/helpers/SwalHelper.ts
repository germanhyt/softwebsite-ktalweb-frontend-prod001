import Swal, { type SweetAlertResult } from "sweetalert2";

interface SwalOptions {
  title?: string;
  html: string;
  customClass?: {
    confirmButton: string;
    cancelButton: string;
    denyButton: string;
  };
  buttonsStyling?: boolean;
  icon?: string;
  showDenyButton?: boolean;
  showCancelButton?: boolean;
  confirmButtonText?: string;
  cancelButtonText?: string;
  denyButtonText?: string;
}

const optionsAlert: SwalOptions = {
  title: "OFFROAD PERU SAC",
  html: "Offroad Perú SAC",
  customClass: {
    confirmButton: "btn btn-primary mx-1",
    cancelButton: "btn btn-danger mx-1",
    denyButton: "btn btn-warning mx-1",
  },
  buttonsStyling: false,
  confirmButtonText: "confirmar",
  cancelButtonText: "cancelar",
  denyButtonText: "denegar",
};

const extend = (...args: SwalOptions[]): Record<string, unknown> =>
  args.reduce((a, b) => Object.assign(a, b), {});

const swalAlertFire = async (
  selectOptions: SwalOptions
): Promise<SweetAlertResult> => {
  const currentOptions = extend(optionsAlert, selectOptions);

  return await Swal.fire(currentOptions);
};

export { swalAlertFire, type SwalOptions };
