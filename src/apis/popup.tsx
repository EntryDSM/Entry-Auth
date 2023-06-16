import { useMutation } from 'react-query';
import { instance } from './axios';

export const useOpenPopUp = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  useMutation(() => instance.post<string>('/user/verify/popup'), {
    onSuccess: (res) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(res.data, 'text/html');

      const inputEl: HTMLInputElement | null = doc.querySelector(
        'input[name="mdl_tkn"]',
      );
      if (!inputEl) return;
      const mdl_tknValue = inputEl.value;

      window.open(`/pass?mdl_tkn=${mdl_tknValue}`, '_blank');
    },
  });
