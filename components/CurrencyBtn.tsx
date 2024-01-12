import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'

type CurrencyBtnProps = PropsWithChildren<{
    name:string;
    flag:string;
}>;

export default function CurrencyBtn(props:CurrencyBtnProps):React.JSX.Element {

  return (
    <View style={styles.wrapper}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flag: {
        fontSize:24,
        marginBottom:4,
    },
    country: {
        fontSize:16,
        marginBottom:4,
    },
})