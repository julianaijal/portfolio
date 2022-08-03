import Analytics from 'analytics'
import googleTagManager from '@analytics/google-tag-manager'
const GTM_CONTAINER_ID = 'GTM-M8PS5F6'

const analytics = Analytics({
    app: 'hallometmij',
    plugins: [
        googleTagManager({
            containerId: GTM_CONTAINER_ID,
						enabled: true,
        }),
    ]
})

export default analytics


