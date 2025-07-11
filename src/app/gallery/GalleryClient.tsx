// app/gallery/GalleryClient.tsx
"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Box,
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // ✅ Use a cleaner icon



const allImages = {
  "Navaratri 2024": [
    {
      src: "/images/gallery1.jpg",
      title: "Day 1",
      subtitle: "Opening Ceremony",
    },
    {
      src: "/images/gallery2.jpg",
      title: "Day 2",
      subtitle: "Classical Dance",
    },
    {
      src: "/images/gallery3.jpeg",
      title: "Day 3",
      subtitle: "Rangoli Design",
    },
    {
      src: "/images/gallery4.jpeg",
      title: "Day 4",
      subtitle: "Temple Decorations",
    },
    {
      src: "https://picsum.photos/id/1037/800/600",
      title: "Day 5",
      subtitle: "Singing Event",
    },
  ],
  "Navaratri 2023": [
    {
      src: "https://picsum.photos/id/1043/800/600",
      title: "Day 1",
      subtitle: "Pooja Prep",
    },
    {
      src: "/images/gallery1.jpg",
      title: "Day 2",
      subtitle: "Bhajan Evening",
    },
    {
      src: "/images/gallery2.jpg",
      title: "Day 3",
      subtitle: "Crowd Celebration",
    },
    {
      src: "/images/gallery3.jpeg",
      title: "Day 4",
      subtitle: "Durga Procession",
    },
    {
      src: "/images/gallery4.jpeg",
      title: "Day 5",
      subtitle: "Garba Night",
    },
  ],
};

type GalleryCategory = keyof typeof allImages;

export default function GalleryClient() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") ?? "Navaratri 2024";
  const router = useRouter();


  const category: GalleryCategory = (
    categoryParam in allImages ? categoryParam : "Navaratri 2024"
  ) as GalleryCategory;

  const images = allImages[category];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const handleThumbnailClick = (index: number) => setCurrentIndex(index);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{ pt: isMobile ? 4 : 6, pb: isMobile ? 2 : 4, px: isMobile ? 2 : 4 }}
      
    >
<Box
  sx={{
    display: "flex",
    justifyContent: "flex-start",
    mb: 2,
  }}
>
  <Button
    variant="contained"
    onClick={() => router.back()}
    startIcon={<ArrowBackIcon />}
    sx={{
      backgroundColor: "#ffffff",
      color: "#000000",
      textTransform: "none",
      fontWeight: 500,
      px: 2,
      py: 1,
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      "&:hover": {
        backgroundColor: "#f0a1a1",
      },
    }}
  >
    Back
  </Button>
</Box>


      <Typography variant="h5" gutterBottom textAlign="center">
        {category} Gallery
      </Typography>

      {/* Main Image Slider */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
        }}
      >
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: 0,
            zIndex: 1,
            display: isMobile ? "none" : "flex",
          }}
        >
          <ArrowBackIos />
        </IconButton>

        <Box
          component="img"
          src={images[currentIndex].src}
          alt={images[currentIndex].title}
          sx={{
            borderRadius: 2,
            width: "100%",
            maxWidth: isMobile ? "100%" : "800px",
            height: isMobile ? 240 : 450,
            objectFit: "cover",
          }}
        />

        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: 0,
            zIndex: 1,
            display: isMobile ? "none" : "flex",
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>

      <Typography variant="subtitle1" textAlign="center" sx={{ mb: 2 }}>
        {images[currentIndex].title} – {images[currentIndex].subtitle}
      </Typography>

      {/* Thumbnails */}
      {isMobile ? (
        <Box
          sx={{
            display: "flex",
            gap: 1,
            overflowX: "auto",
            pb: 1,
          }}
        >
          {images.map((img, idx) => (
            <Box
              key={idx}
              onClick={() => handleThumbnailClick(idx)}
              sx={{
                border:
                  idx === currentIndex
                    ? "2px solid #1976d2"
                    : "2px solid transparent",
                borderRadius: 2,
                flexShrink: 0,
              }}
            >
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                style={{
                  height: 100,
                  width: 130,
                  objectFit: "cover",
                  borderRadius: 8,
                }}
              />
            </Box>
          ))}
        </Box>
      ) : (
        <ImageList cols={5} gap={12}>
          {images.map((img, idx) => (
            <ImageListItem
              key={idx}
              onClick={() => handleThumbnailClick(idx)}
              sx={{
                cursor: "pointer",
                border:
                  idx === currentIndex
                    ? "2px solid #1976d2"
                    : "2px solid transparent",
                borderRadius: 2,
                overflow: "hidden",
                transition: "0.3s",
              }}
            >
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                style={{ width: "100%", height: 120, objectFit: "cover" }}
              />
              <ImageListItemBar title={img.title} subtitle={img.subtitle} />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </Box>
  );
}
