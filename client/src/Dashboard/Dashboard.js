import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useApiResponse } from '_shared/_hooks/useApiResponse'
import { useAuthentication } from '_shared/_hooks/useAuthentication'

export function Dashboard() {
  const [businessList, setBusinessList] = useState([])
  const { makeRequest } = useApiResponse()
  const { t } = useTranslation()
  const { storedToken } = useAuthentication()
  useEffect(() => {
    const responseValue = async () => {
      const businesses = await makeRequest({
        type: 'get',
        url: '/api/v1/businesses',
        headers: {
          Accept: 'application/vnd.pieforproviders.v1+json',
          'Content-Type': 'application/json',
          Authorization: storedToken
        }
      })
      const allBusinesses = await businesses.json()
      if (!allBusinesses.error) {
        setBusinessList(allBusinesses)
      }
    }

    // Interesting re: refresh tokens - https://github.com/waiting-for-dev/devise-jwt/issues/7#issuecomment-322115576
    responseValue()
    // still haven't found a better way around this - sometimes we really do
    // only want the useEffect to fire on the first component load
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div className="dashboard">
        <h1>{t('dashboardTitle')}</h1>
        {businessList &&
          businessList.map(business => {
            return <div key={business.name}>{business.name}</div>
          })}
      </div>
      <div>
        <div className="body-1">Body 1</div>
        <div className="body-2">Body 2</div>
        <div className="body-2-bold">Body 2 Bold</div>
        <div className="link-text">Link Text</div>
        <div className="error-text">Error Text</div>
        <div className="disabled-text">Disabled Text</div>
        <div className="tiny-text">Tiny Text</div>
        <div className="display-large">Display Large</div>
        <div className="h1-large">H1 Large</div>
        <div className="h2-large">H2 Large</div>
        <div className="h3-large">H3 Large</div>
        <div className="eyebrow-large">Eyebrow Large</div>
        <div className="display-small">Display Small</div>
        <div className="h1-small">H1 Small</div>
        <div className="h2-small">H2 Small</div>
        <div className="h3-small">H3 Small</div>
        <div className="eyebrow-small">Eyebrow Small</div>
      </div>
    </div>
  )
}
