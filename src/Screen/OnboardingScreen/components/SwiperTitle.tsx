import React from 'react';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Swiper from 'react-native-swiper';
import { Book1Pic, Book2Pic, Book3Pic } from '../../../Assets';
import { titleOne, titleThree, titleTwo } from '../constant';
import styles from '../styles';

const SwiperTitle = () => {
  return (
    <View style={styles.containerSwiperTitle}>
      <Swiper
        autoplay
        loop={false}
        showsPagination={true}
        bounces={false}
        autoplayTimeout={3}>
        <View style={styles.wrapperItemTitle}>
          <FastImage
            source={Book1Pic}
            style={styles.imageTitle}
            resizeMode={FastImage.resizeMode.cover}
          />
          <Text style={styles.title}>{titleOne}</Text>
        </View>
        <View style={styles.wrapperItemTitle}>
          <FastImage
            source={Book2Pic}
            style={styles.imageTitle}
            resizeMode={FastImage.resizeMode.cover}
          />
          <Text style={styles.title}>{titleTwo}</Text>
        </View>
        <View style={styles.wrapperItemTitle}>
          <FastImage
            source={Book3Pic}
            style={styles.imageTitle}
            resizeMode={FastImage.resizeMode.cover}
          />
          <Text style={styles.title}>{titleThree}</Text>
        </View>
      </Swiper>
    </View>
  );
};

export default SwiperTitle;
