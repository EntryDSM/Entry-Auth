import { useQueryValues } from '@/hooks/useQueryValues';
import { useEffect } from 'react';

export const Pass = () => {
  const moduleToken = useQueryValues().get('mdl_tkn');
  function request() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    document.form1.submit();
  }

  useEffect(() => {
    if (moduleToken) request();
    else {
      window.close();
    }
  }, [moduleToken]);

  if (!moduleToken) return null;
  return (
    <form
      name="form1"
      action="https://safe.ok-name.co.kr/CommonSvl"
      method="post"
    >
      <input
        type="hidden"
        name="tc"
        value="kcb.oknm.online.safehscert.popup.cmd.P931_CertChoiceCmd"
      />
      <input type="hidden" name="cp_cd" value="V61290000000" />
      <input type="hidden" name="mdl_tkn" value={moduleToken} />
      <input type="hidden" name="target_id" value="" />
    </form>
  );
};
