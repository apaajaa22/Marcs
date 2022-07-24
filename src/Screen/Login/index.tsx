import BottomSheet from '@gorhom/bottom-sheet';
import React, { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import { Keyboard, Text, View } from 'react-native';
import { Button, TextInputEmail, TextInputPassword } from '../../Components';
import { loginTitle } from './constants';
import styles from './styles';

const Login = forwardRef((_, ref): any => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['100%'], []);

  useImperativeHandle(
    ref,
    () => ({
      openLogin: () => bottomSheetRef.current?.snapToIndex(0),
      closeLogin: () => bottomSheetRef.current?.snapToIndex(-1),
    }),
    [ref],
  );

  function onChangeBS(props: Number) {
    if (props === -1) {
      Keyboard.dismiss();
      return;
    }
  }
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        onChange={onChangeBS}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{loginTitle}</Text>
          <TextInputEmail />
          <TextInputPassword />
          <Button title={loginTitle} type="secondary" />
        </View>
      </BottomSheet>
    </View>
  );
});

export default Login;
