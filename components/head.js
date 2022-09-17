/* eslint-disable @next/next/no-page-custom-font */
import React from 'react'
import Script from 'next/script'
import NextHead from 'next/head'



export default function head({title}) {
    return (
        <>
            <NextHead>
                <>
                    <meta name="keywords" content="ssik824, web-design, marvel,marvel-comics, marvel comics, marvel events, marvel api, marvel characters, marvel HQs, mcu, MCU, avengers, marvel characters, ui/ux, ui,ux, victor kiss, website, website project"/>

                    <meta name="author" content="ssik824"/>

                    <meta name="description" content="Discovery more about the Marvel Universe!"/>

                    <meta charSet="UTF-8"/>

                    <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8"/>

                
                    
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    
                    <meta httpEquiv="Content-Language" content="pt-br"/>

                    <meta name="robots" content="index, follow"/>
                    
                    <meta name="google-site-verification" content="VhQSA-WAgNF6QY7IUMhGqwGRrRVmaGFvypFs0QZHGrM" />
                    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-T28K1YCBCK"/>

                    <link rel="icon" type="image/x-icon" href="/marvel.svg"/>

                    <link rel="preconnect" href="https://fonts.googleapis.com"/>

                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>

                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;800&display=swap" rel="stylesheet"/> 

                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"/>
                    <title>{title}</title> 
                    </>
            </NextHead>
        </>
    )
}
