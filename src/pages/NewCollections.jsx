import React, {useRef} from 'react'
import { CollectionsSection, CollectionTitle, OverLay, CollectionRight, ImageContainer, CollectionItem } from '../styles/Themes';
import {motion, animate, useInView } from "framer-motion";
import img11 from "../assets/images/11.webp";
import img12 from "../assets/images/12.webp";
import img13 from "../assets/images/13.webp";
import img14 from "../assets/images/14.webp";

const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } },
};

const Product = ({ img, title = "" }) => {
  return (
    <CollectionItem
      as={motion.div}
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)"}}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 1 }}
    >
      <img src={img} alt={title} width="400" height="600" className='ml-5' />
      <h1 className='text-center font-mono text-lg'>{title}</h1>
    </CollectionItem>
  );
};

const NewCollections = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, {once:false});
  return (
    <CollectionsSection>
        <CollectionTitle 
        ref={ref}
        initial={{opacity:0, x: -100}}
        animate={isInView ? {opacity: 1, x: 0} : {}} 
        transition={{duration: 1}}>
        New Collection</CollectionTitle>
        <OverLay>
          <ImageContainer>
          <Product img={img11} title="Ethnic Wear" />
          <Product img={img12} title="Blazers" />
          <Product img={img13} title="Antiques" />
          <Product img={img14} title="Jewellery" />
          </ImageContainer>
        </OverLay>

        <CollectionRight>
              <motion.p
              className="mb-4"
              initial="hidden"
            whileInView="visible"
            variants={fadeDown}>
                There is new collection available for cool clothes in all sizes. This collection is a great way to find a new look for you. It offers a variety of cool apparel styles to fit your taste, while you can also find some cool clothes that you can wear everyday.
              </motion.p>
              <motion.p className="mb-4"
               initial="hidden"
               whileInView="visible"
               variants={fadeDown}>
              The first line of clothing you will see on this collection is for men. The collection also includes three new styles for women.
              </motion.p>
              <motion.p 
               initial="hidden"
               whileInView="visible"
               variants={fadeDown}>
              Give it a try and experience a new look.
              </motion.p>
          </CollectionRight>
                </CollectionsSection>
  )
}

export default NewCollections
``````````````