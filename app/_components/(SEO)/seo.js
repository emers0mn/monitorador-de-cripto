'use client'
import Hotjar from '@hotjar/browser';
import { useEffect } from 'react'
import Script from "next/script"

export function GoogleAnalytcs({ id }) {
    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=G-${id}`}
            />

            <Script id="google-analytcs" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-${id}');
                `}
            </Script>
        </>
    )
}

export function HotjarC( {id} ) {
    const hotjarVersion = 6;

    useEffect(() => {
        Hotjar.init(id, hotjarVersion);

        // Se precisar ativar o modo debug
        Hotjar.init(id, hotjarVersion, {
            debug: true
        });
    }, []);

    return null;
}

export function Pixel({ id }) {
    useEffect(() => {
        // Inicializa o Facebook Pixel
        !function(f,b,e,v,n,t,s){
            if(f.fbq) return;
            n=f.fbq=function(){
                n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments)
            };
            if(!f._fbq) f._fbq=n;
            n.push=n; n.loaded=!0; n.version='2.0';
            n.queue=[];
            t=b.createElement(e); t.async=!0;
            t.src=v; s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)
        }(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js');

        fbq('init', id);
        fbq('track', 'PageView');

        // Adiciona o script de fallback para o noscript
        const noscriptImg = document.createElement('img');
        noscriptImg.height = 1;
        noscriptImg.width = 1;
        noscriptImg.style.display = 'none';
        noscriptImg.src = `https://www.facebook.com/tr?id=${Id}&ev=PageView&noscript=1`;
        document.body.appendChild(noscriptImg);

        return () => {
        };
    }, [id]); 

    return <Script id="fb-pixel" strategy="afterInteractive" />;
}

export function LeadSter( {id} ) {
    
    useEffect(() => {
        !function(a,b,c,d){
            try{var e=b.head||b.getElementsByTagName("head")[0];
                var f=b.createElement("script");f.setAttribute("src",c);
                f.setAttribute("charset","UTF-8");f.defer=true;a.neuroleadId=d;
                e.appendChild(f)}catch(g){}
            }(window,document,"https://cdn.leadster.com.br/neurolead/neurolead.min.js", id)
    }, []);

    return <Script id="leadster-script" strategy="afterInteractive" />;
}

export function GAdense({ id }) {
    return (
        <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${id}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
        />
    );
}