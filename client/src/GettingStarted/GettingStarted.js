import React from 'react'
import { Card, Typography } from 'antd'
import Icon from '@material-ui/core/Icon'
import AssignmentIcon from '@material-ui/icons/Assignment'
import BusinessIcon from '@material-ui/icons/Business'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd'
import { useTranslation } from 'react-i18next'
import { PaddedButton } from '_shared/PaddedButton'

const userGreetingName = 'Amanda'
// NB: we're using CSS grid instead of Ant grid for these cards
// because Ant grid doesn't flow into the next row when there are
// more cards than columns

export function GettingStarted() {
  const { t } = useTranslation()
  const cards = [
    {
      description: t('gettingStartedBusinesses'),
      icon: <BusinessIcon />,
      title: t('gettingStartedBusinessesTitle')
    },
    {
      description: t('gettingStartedUpload'),
      icon: <CloudUploadIcon />,
      title: t('gettingStartedUploadTitle')
    },
    {
      description: t('gettingStartedDetails'),
      icon: <PlaylistAddIcon />,
      title: t('gettingStartedDetailsTitle')
    },
    {
      description: t('gettingStartedAgencies'),
      icon: <AssignmentIcon />,
      title: t('gettingStartedAgenciesTitle')
    }
  ]
  return (
    <div className="getting-started text-gray1">
      <div className="getting-started-content-area">
        <Typography.Title className="text-center">
          {t('gettingStartedWelcome')}
          {userGreetingName}!
        </Typography.Title>

        <div className="mb-8">
          <Typography.Title level={3}>
            {t('gettingStartedTitle')}
          </Typography.Title>
          <p>{t('gettingStartedInstructions')}</p>
        </div>

        <Typography.Title level={3}>{t('steps')}</Typography.Title>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-4">
          {cards.map((card, idx) => (
            <Card
              bordered={false}
              className="text-center text-gray1 mb-1"
              key={idx}
            >
              <Icon className="text-primaryBlue">{card.icon}</Icon>
              <p className="mt-4 mb-2 text-gray1 font-semibold">
                {idx + 1}. {card.title}
              </p>
              <p>{card.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <PaddedButton text={t('gettingStartedButton')} />
        </div>
      </div>
    </div>
  )
}