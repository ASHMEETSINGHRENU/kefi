import React from 'react';
import { Hero } from '../components/Hero';
import { BrandStatement } from '../components/BrandStatement';
import { CollectionsPreview } from '../components/CollectionsPreview';
import { CustomDesignStory } from '../components/CustomDesignStory';
import { OccasionShowcase } from '../components/OccasionShowcase';
import { DesignProcess } from '../components/DesignProcess';
import { BrandValues } from '../components/BrandValues';
import { GalleryPreview } from '../components/GalleryPreview';
import { FinalConversion } from '../components/FinalConversion';

export const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <BrandStatement />
      <CollectionsPreview />
      <CustomDesignStory />
      <OccasionShowcase />
      <DesignProcess />
      <BrandValues />
      <GalleryPreview />
      <FinalConversion />
    </div>
  );
};
