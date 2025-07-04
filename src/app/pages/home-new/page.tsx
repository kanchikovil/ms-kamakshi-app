// import * as React from 'react';
// import { Box, Grid2, Typography } from '@mui/material';
// import FullWidthMessage from '@/app/components/FullWidthMessage';
// import RegistrationCard from '@/app/components/RegistrationCard';


// import Banner from '@/app/components/Banner';
// import RegistrationStatusCard from '@/app/components/RegistrationStatusCard';

// export default function HomePage() {
//   return (
//     <Grid2 container spacing={0}>
//       <Grid2 size={12}>
//         <Banner />
//       </Grid2>
//       <Grid2 size={12}>
//         <FullWidthMessage message="Navaratri Registration" />
//       </Grid2>
//       <Grid2 size={12} spacing={2} padding={'2em'} direction={'row'} display={'flex'}>
//         <Grid2 size={4}>
//           <RegistrationCard regType='kanya' />
//         </Grid2>
//         <Grid2 size={4}>
//           <RegistrationCard regType='suvasini' /> 
//         </Grid2>
//         <Box sx={{
//           position: 'absolute',
//           right: '3%',
//           top: '26%'
//         }}>
//           <RegistrationStatusCard />
//         </Box>
//       </Grid2>
//       <Grid2 size={8} spacing={2} padding={'0 2em 3em 3em'} direction={'row'} display={'flex'}>
//         <Typography fontSize={12}>Lorem ipsum dolor sit amet consectetur. Sed consectetur cursus nullam suspendisse volutpat lacinia odio.
//           Dolor sapien consectetur et eget sagittis mauris pharetra pellentesque. Adipiscing orci dui pulvinar lectus adipiscing.
//           Velit egestas amet suspendisse dolor vitae cursus. Lacus nunc adipiscing sit et ac ac. Mi volutpat in sed at egestas in.
//           Consequat ac feugiat vitae semper sit adipiscing nec nisl quis. Platea interdum felis nunc porta amet cras morbi.
//           Sollicitudin eget non proin fermentum et pretium.
//         </Typography>
//       </Grid2>
//     </Grid2>
//   );
// }


'use client';
import * as React from 'react';
import { Box, Typography, useMediaQuery, useTheme, Grid, Tabs, Tab, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';

import FullWidthMessage from '@/app/components/FullWidthMessage';
import RegistrationCard from '@/app/components/RegistrationCard';
import Banner from '@/app/components/Banner';
import RegistrationStatusCard from '@/app/components/RegistrationStatusCard';

export default function HomePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // 0 - 600
  const isTabletOnly = useMediaQuery('(min-width:601px) and (max-width:1024px)'); // 601 - 1024
  const isMidDesktop = useMediaQuery('(min-width:1025px) and (max-width:1276px)'); // 1025 - 1275
  const isDesktopOnly = useMediaQuery('(min-width:1276px)'); // 1276+  

  const [carouselTab, setCarouselTab] = React.useState(0);

  const carouselCategories = [
    {
      label: 'Navaratri 2024',
      images: [
        { src: '/images/img1.jpg', title: 'Day 1', subtitle: 'Opening Ceremony' },
        { src: '/images/img2.jpg', title: 'Day 2', subtitle: 'Cultural Program' },
        { src: '/images/img3.jpg', title: 'Day 3', subtitle: 'Special Pooja' },
      ],
    },
    {
      label: 'Navaratri 2023',
      images: [
        { src: '/images/img4.jpg', title: 'Day 1', subtitle: 'Opening Ceremony' },
        { src: '/images/img5.jpg', title: 'Day 2', subtitle: 'Cultural Program' },
        { src: '/images/img6.jpg', title: 'Day 3', subtitle: 'Special Pooja' },
      ],
    },
    // Add more categories as needed
  ];

  return (
    <Box sx={{ pb: '80px' }}>
      {isMobile && (
        <Grid container spacing={2} direction="column" alignItems="center" sx={{ maxWidth: '100vw' }}>
          <Grid item xs={12}><Banner /></Grid>
          <Grid item xs={12}><FullWidthMessage message="Navaratri Registration" /></Grid>
          <Grid item xs={12} sx={{ maxWidth: 400, width: '100%' }}>
            <RegistrationCard regType="kanya" />
          </Grid>
          <Grid item xs={12} sx={{ maxWidth: 400, width: '100%' }}>
            <RegistrationCard regType="suvasini" />
          </Grid>
          <Grid item xs={12} sx={{ maxWidth: 400, width: '100%' }}>
            <RegistrationStatusCard />
          </Grid>
          <Grid item xs={12} sx={{ maxWidth: 600, width: '100%', px: 2, mt: 2, mb: 4 }}>
            <Typography fontSize={12} textAlign="center">
                The Kamakshi Amman Temple in Kanchipuram, one of the 51 Shakti Peethas and a key center of Shaktism. Dedicated to Goddess Kamakshi, a powerful form of Parvati, the temple becomes the heart of devotion during Navaratri. 
                The festival celebrates feminine energy (Shakti) and the triumph of good over evil. <strong>Kanya Pooja</strong> is the ritual worship of young girls, <strong>typically between the ages of 2 and 10</strong>, who are considered to be embodiments of Devi Durga or Kamakshi. In Shakta traditions, the divine feminine (Shakti)
                 is believed to reside in all women, and in young girls, this energy is seen as untainted and powerful.
                 One of the deeply revered rituals performed is the <strong>Sowbhagya Suvasini Pooja</strong> (also spelled as <strong>Suvasini Pooja</strong>). This pooja is a traditional worship of married women, believed to embody the blessings of Sri Kamakshi Devi, the goddess of prosperity, 
                 fertility, and auspiciousness.
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ maxWidth: 600, width: '100%', px: 2, mt: 2, mb: 4 }}>
            Past event collection here
          </Grid>
        </Grid>
      )}

      {isTabletOnly && (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            px: 2,
          }}
        >
          <Box sx={{ width: '100%', maxWidth: '768px', px: 2 }}>
            <Banner />
          </Box>

          <Box sx={{ width: '100%', maxWidth: '768px', px: 2, mt: 2 }}>
            <FullWidthMessage message="Navaratri Registration" />
          </Box>

          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{ width: '100%', maxWidth: '768px', px: 2, mt: 2 }}
          >
            <Grid item xs={12} sm={6}>
              <RegistrationCard regType="kanya" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <RegistrationCard regType="suvasini" />
            </Grid>
            <Grid item xs={12}>
              <RegistrationStatusCard />
            </Grid>
          </Grid>

          <Box sx={{ width: '100%', maxWidth: '768px', px: 2, mt: 2, mb: 4 }}>
            <Typography fontSize={12} textAlign="center">
                The Kamakshi Amman Temple in Kanchipuram, one of the 51 Shakti Peethas and a key center of Shaktism. Dedicated to Goddess Kamakshi, a powerful form of Parvati, the temple becomes the heart of devotion during Navaratri. 
                The festival celebrates feminine energy (Shakti) and the triumph of good over evil. <strong>Kanya Pooja</strong> is the ritual worship of young girls, <strong>typically between the ages of 2 and 10</strong>, who are considered to be embodiments of Devi Durga or Kamakshi. In Shakta traditions, the divine feminine (Shakti)
                 is believed to reside in all women, and in young girls, this energy is seen as untainted and powerful.
                 One of the deeply revered rituals performed is the <strong>Sowbhagya Suvasini Pooja</strong> (also spelled as <strong>Suvasini Pooja</strong>). This pooja is a traditional worship of married women, believed to embody the blessings of Sri Kamakshi Devi, the goddess of prosperity, 
                 fertility, and auspiciousness.
            </Typography>
          </Box>
        </Box>
      )}
      {isMidDesktop && (
        <Grid container spacing={0}>

          <Grid item xs={12}><Banner /></Grid>
          <Grid item xs={12}><FullWidthMessage message="Navaratri Registration" /></Grid>

          <Grid
            container
            item
            xs={12}
            spacing={2}
            padding={'2em'}
            direction="row"
            alignItems="center"
          >
            <Grid item xs={3.8} sx={{ mr: 1 }}>
              <RegistrationCard regType="kanya" />
            </Grid>
            <Grid item xs={3.8}>
              <RegistrationCard regType="suvasini" />
            </Grid>

            <Box
              sx={{
                position: 'absolute',
                right: '3%',
                top: '20%',
              }}
            >
              <RegistrationStatusCard />
            </Box>
          </Grid>

          <Grid
            container
            item
            xs={12}
            spacing={2}
            padding={'0 2em 3em 3em'}
            direction="row"
            alignItems="center"
          >
            <Grid item xs={8}>
              <Typography fontSize={12}>
                The Kamakshi Amman Temple in Kanchipuram, one of the 51 Shakti Peethas and a key center of Shaktism. Dedicated to Goddess Kamakshi, a powerful form of Parvati, the temple becomes the heart of devotion during Navaratri. 
                The festival celebrates feminine energy (Shakti) and the triumph of good over evil. <strong>Kanya Pooja</strong> is the ritual worship of young girls, <strong>typically between the ages of 2 and 10</strong>, who are considered to be embodiments of Devi Durga or Kamakshi. In Shakta traditions, the divine feminine (Shakti)
                 is believed to reside in all women, and in young girls, this energy is seen as untainted and powerful.
                 One of the deeply revered rituals performed is the <strong>Sowbhagya Suvasini Pooja</strong> (also spelled as <strong>Suvasini Pooja</strong>). This pooja is a traditional worship of married women, believed to embody the blessings of Sri Kamakshi Devi, the goddess of prosperity, 
                 fertility, and auspiciousness.
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ width: '100%', maxWidth: 600 }}>
            <Tabs value={carouselTab} onChange={(_, v) => setCarouselTab(v)} variant="scrollable" scrollButtons="auto">
              {carouselCategories.map((cat, idx) => (
                <Tab key={cat.label} label={cat.label} />
              ))}
            </Tabs>
            <Box sx={{ mt: 2 }}>
              <ImageList cols={isMobile ? 1 : 3} gap={8}>
                {carouselCategories[carouselTab].images.map((img, idx) => (
                  <ImageListItem key={img.src}>
                    <img
                      src={img.src}
                      alt={img.title}
                      loading="lazy"
                      style={{ borderRadius: 8, width: '100%', height: 180, objectFit: 'cover' }}
                    />
                    <ImageListItemBar title={img.title} subtitle={img.subtitle} />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Box>
        </Grid>
      )}

      {isDesktopOnly && (
        <Grid container spacing={0}>

          <Grid item xs={12}><Banner /></Grid>
          <Grid item xs={12}><FullWidthMessage message="Navaratri Registration" /></Grid>

          <Grid
            container
            item
            xs={12}
            spacing={2}
            padding={'2em'}
            direction="row"
            alignItems="center"
          >
            <Grid item xs={4}>
              <RegistrationCard regType="kanya" />
            </Grid>
            <Grid item xs={4}>
              <RegistrationCard regType="suvasini" />
            </Grid>
            <Box
              sx={{
                position: 'absolute',
                right: '1.2%',
                top: '26%',
              }}
            >
              <RegistrationStatusCard />
            </Box>
          </Grid>

          <Grid
            container
            item
            xs={12}
            spacing={2}
            padding={'0 2em 2em 2em'}
            direction="row"
            alignItems="center"
            alignContent="justify"
          >
            <Grid item xs={8}>
              <Typography fontSize={16}>
                The Kamakshi Amman Temple in Kanchipuram, one of the 51 Shakti Peethas and a key center of Shaktism. Dedicated to Goddess Kamakshi, a powerful form of Parvati, the temple becomes the heart of devotion during Navaratri. 
                The festival celebrates feminine energy (Shakti) and the triumph of good over evil. <strong>Kanya Pooja</strong> is the ritual worship of young girls, <strong>typically between the ages of 2 and 10</strong>, who are considered to be embodiments of Devi Durga or Kamakshi. In Shakta traditions, the divine feminine (Shakti)
                 is believed to reside in all women, and in young girls, this energy is seen as untainted and powerful.
                 One of the deeply revered rituals performed is the <strong>Sowbhagya Suvasini Pooja</strong> (also spelled as <strong>Suvasini Pooja</strong>). This pooja is a traditional worship of married women, believed to embody the blessings of Sri Kamakshi Devi, the goddess of prosperity, 
                 fertility, and auspiciousness.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            spacing={2}
            padding={'2em 0em 2em 0em'}
            direction="row"
            alignItems="center"
          >
            <Grid item xs={12}><FullWidthMessage message="Past Events ..." /></Grid>
            <Grid item xs={8}>
              <Box sx={{ width: '100%', maxWidth: 600 }}>
                <Tabs value={carouselTab} onChange={(_, v) => setCarouselTab(v)} variant="scrollable" scrollButtons="auto">
                  {carouselCategories.map((cat, idx) => (
                    <Tab key={cat.label} label={cat.label} />
                  ))}
                </Tabs>
                <Box sx={{ mt: 2 }}>
                  <ImageList cols={isMobile ? 1 : 3} gap={8}>
                    {carouselCategories[carouselTab].images.map((img, idx) => (
                      <ImageListItem key={img.src}>
                        <img
                          src={img.src}
                          alt={img.title}
                          loading="lazy"
                          style={{ borderRadius: 8, width: '100%', height: 180, objectFit: 'cover' }}
                        />
                        <ImageListItemBar title={img.title} subtitle={img.subtitle} />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}
