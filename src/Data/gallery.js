const gallery = [
    {
        id: "cocaine",
        images: [
            'https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/37440/s960_cocainepic.png',
            "https://cdn.adf.org.au/media/images/cocaine-social.2e16d0ba.fill-1200x1200.jpg",
            "https://c.files.bbci.co.uk/104C8/production/_123106766_mediaitem123106765.jpg",
            "https://m3.healio.com/~/media/slack-news/stock-images/cardiology/c/cocaine.jpg",
            "https://ranchcreekrecovery.com/wp-content/uploads/2021/01/bigstock-Drug-Dealer-Holding-Bag-With-C-289667812-e1611697099275.jpg"
        ]
    },
    {
        id: "amphetamines",
        images: [
            "https://cdn.adf.org.au/media/images/amphetamines-social.2e16d0ba.fill-1200x1200.jpg",
            "https://www.drugfreekidscanada.org/wp-content/uploads/2023/04/illegal-drugs-featured.jpg",
            "https://cdn-prod.medicalnewstoday.com/content/images/articles/221/221211/amphetamine.jpg",
            "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/4/13/1397414381826/Mephedrone-Drug-005.jpg?width=465&dpr=1&s=none",
            "https://globalnews.ca/wp-content/uploads/2022/04/Drugs.jpg?quality=85&strip=all",
        ]
    },
    {
        id: "ecstasy",
        images: [
            "https://newchoicestc.com/wp-content/uploads/2018/12/What-is-Molly.png.webp",
            "https://www.justthinktwice.gov/sites/default/files/styles/content/public/ecstacy-02.jpg?h=1a1d35e1&itok=ueTzutxk",
            "https://post.healthline.com/wp-content/uploads/2019/08/glitter-pills-rave-molly-still-life-1200x628-facebook.jpg",
            "https://theheightstreatment.com/wp-content/uploads/2022/11/drugs-molly.jpg",
            "https://media.springernature.com/full/springer-static/image/art%3A10.1038%2F426403a/MediaObjects/41586_2003_Article_BF426403a_Fig1_HTML.jpg",
            "https://www.simcoerehab.ca/wp-content/uploads/2022/12/SR-B-2211-04-molly.png",
            "https://cdn-prod.medicalnewstoday.com/content/images/articles/297/297064/mdma.jpg",
            "https://cfhh.ca/wp-content/uploads/Ecstacy-Pills-scaled.jpeg"
        ]
    },
    {
        id: "hashish",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Hashish.jpg/1200px-Hashish.jpg",
            "https://www.narconon.org/FURL/imagecache/cropfit@w=710/blob/images/articles/7/b/7b703103-3200-11e8-8268-42010a8004cc/hashish.jpg",
            "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-180768-166162202.jpg?w=1600&h=900&crop=1",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/American_medical_hashish%2810%29.jpg/640px-American_medical_hashish%2810%29.jpg",
            "https://scojotheherbadvisor.files.wordpress.com/2018/03/bubble-hash_mar-2017-2.jpg?w=1400",
            "https://media.istockphoto.com/id/1205213809/photo/medical-marijuana-moroccan-hash-cannabis-pollen-hashish-closeup-in-morocco.jpg?s=612x612&w=0&k=20&c=uyR4IRKnwW-qClgX_CrO06prUEoLh88Vb1BX_ut9PzE="
        ]
    },
    {
        id: "meth",
        images: [
            "https://www.thewoodsatparkside.com/wp-content/uploads/2022/05/picture-of-meth.png",
            "https://admin.acceleratingscience.com/identifying-threats/wp-content/uploads/sites/11/2021/03/blue-meth-picture-id64257085420_1_.jpg",
            "https://cloudfront-us-east-1.images.arcpublishing.com/gray/25ZIIMWTEJBEFOVFDNE4UOQSFQ.jpg",
            "https://images.foxtv.com/static.fox9.com/www.fox9.com/content/uploads/2022/10/1280/720/Meth-Seizure-Blue-Earth.jpg?ve=1&tl=1",
            "https://www.penncapital-star.com/wp-content/uploads/2022/08/METH--1024x683.webp",
            "https://ranchcreekrecovery.com/wp-content/uploads/2021/07/bigstock-Methamphetamine-also-known-as-143272829-1.jpg"
        ]
    },
    {
        id: "heroin",
        images: [
            "https://www.recoveryohio.org/wp-content/uploads/2022/11/Heroin-Powder-ORC.jpg",
            "https://www.immersionrecovery.com/wp-content/uploads/2021/09/heroin_closeup.jpg",
            "https://treehouserecovery.com/wp-content/uploads/2020/12/shutterstock_1725602533.jpg",
            "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/MSNBC/Components/Video/201610/2016-10-18T22-47-23-4Z--1280x720.jpg",
            "https://i.guim.co.uk/img/media/95094794f8d63446996ec707315b91401fe0070e/0_102_3072_1843/master/3072.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1a8e5a169fee5ba29a75d98e87931d8e",
            "https://springhillrecovery.com/wp-content/uploads/Heroin-ID.jpg"
        ]
    },
    {
        id: "lsd",
        images: [
            "https://www.dea.gov/sites/default/files/2018-07/lsd.jpg",
            "https://pyxis.nymag.com/v1/imgs/098/19e/540d27401c3636460f4e6ee9b0d1e75284-28-LSD.jpg",
            "https://d2cbg94ubxgsnp.cloudfront.net/Pictures/2000xAny/9/1/9/132919_Pink_Elephants_on_Parade_Blotter_LSD_Dumbo.jpg",
            "https://images.prismic.io/wellcomecollection/f1fc31f9911cd62b858dc2b2c676c44096090317_tf_181114_3070047_16x9.jpg?auto=compress,format",
            "https://64.media.tumblr.com/b70caaacaa9a12d6c2f440890db69f20/82465aa5a6de15ff-f1/s540x810/945defc2d4d4e03c823df298b713339b45f4c244.pnj",
            "https://doubleblindmag.com/wp-content/uploads/2021/07/lsd-vs-acid-1.jpg",
            "https://imgix.bustle.com/inverse/9f/81/e1/c2/6c91/4f91/a6b1/939ea472eaf4.jpeg?w=1200&h=630&fit=crop&crop=faces&fm=jpg",
            "https://m.media-amazon.com/images/I/81lFbNX-eNL.jpg"
        ]
    }
];

export default gallery;