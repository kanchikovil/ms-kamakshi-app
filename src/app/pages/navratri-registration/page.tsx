// 'use client';
// // src/components/RegistrationForm.tsx
// import React, { Suspense } from 'react';
// import { Box, Typography } from '@mui/material';
// import Grid from '@mui/material/Grid';
// import NavratriRegistrationForm from '@/app/components/NavratriRegistrationForm';
// import { NavratriRegistraionHeader } from '@/app/components/NavratriRegistraionHeader';
// import { NavratriInstructions } from '@/app/components/NavratriInstructions';

// interface RegistrationFormProps {
//   // initialData?: { userName: string; userPhone: string; id?: number };
//   // onSuccess?: () => void;
// }

// const RegistrationForm: React.FC<RegistrationFormProps> = () => {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <NavratriRegistraionHeader regType="kanya" />
// <Grid container spacing={1} sx={{ backgroundColor: '#E8DFDFFF' }}>
//   <Grid item xs={12} md={4}>
//     <NavratriInstructions regType="kanya" />
//   </Grid>
//   <Grid item xs={12} md={8}>

//           <Box
//             sx={{
//               height: '100%',
//               fontSize: 30,
//               borderRadius: 1,
//               margin: 1,
//               padding: '2%',
//             }}
//           >
//             <NavratriRegistrationForm />
//           </Box>
//         </Grid>
//       </Grid>
//     </Suspense>
//   );
// };

// export default RegistrationForm;
'use client';

import React, { Suspense } from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import NavratriRegistrationForm from '@/app/components/NavratriRegistrationForm';
import { NavratriRegistraionHeader } from '@/app/components/NavratriRegistraionHeader';
import { NavratriInstructions } from '@/app/components/NavratriInstructions';
import { useSearchParams } from 'next/navigation';


export const dynamic = 'force-dynamic';

const RegistrationFormContent = () => {
  const searchParams = useSearchParams();
  const regType = searchParams.get('registrationType') || 'kanya';

  console.log("Current regType from URL:", regType);

  return (
    <>
      <NavratriRegistraionHeader regType={regType} />
      <Grid container spacing={1} sx={{ backgroundColor: '#E8DFDFFF' }}>
        <Grid item xs={12} md={4}>
          <NavratriInstructions regType={regType} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              height: '100%',
              fontSize: 30,
              borderRadius: 1,
              margin: 1,
              padding: '2%',
            }}
          >
            <NavratriRegistrationForm />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

const RegistrationForm: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegistrationFormContent />
    </Suspense>
  );
};

export default RegistrationForm;
