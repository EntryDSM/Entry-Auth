import { useMutation } from 'react-query';
import { instance } from './axios';
import { useToken } from '@/hooks/useToken';

export const useOpenPopUp = () => {
  const { setToken } = useToken();

  const openPopUp = useMutation(
    (redirectUrl: string) =>
      // eslint-disable-next-line
      instance.post<string>('/user/verify/popup', {
        redirect_url: redirectUrl,
      }),
    {
      onSuccess: (res) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(res.data, 'text/html');

        const inputEl: HTMLInputElement | null = doc.querySelector(
          'input[name="mdl_tkn"]',
        );
        if (!inputEl) return;
        const mdl_tknValue = inputEl.value;

        setToken(mdl_tknValue);

        window.open(`/pass?mdl_tkn=${mdl_tknValue}`, '_blank');
      },
    },
  );

  return {
    openPopUp,
  };
};
