// pages/admin.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useEditState } from 'tinacms/dist/edit-state';

const GoToEditPage = () => {
  const { setEdit } = useEditState();
  const router = useRouter();
  useEffect(() => {
    setEdit(true);
    // Go back to the page you were on previously
    router.back();
  }, []);
  // Display a brief message to the user
  return <div>Going into edit mode...</div>;
};

export default GoToEditPage;
