import React from 'react'

const ConsultationPopupContext = React.createContext()

function useConsultationPopupContext() {
  const context = React.useContext(ConsultationPopupContext)
  if (!context) {
    throw new Error(`useCount must be used within a ConsultationPopupProvider`)
  }

  const [isVisible, setIsVisible] = context

  return {
    isVisible,
    setIsVisible,
  }
}

function ConsultationPopupProvider(props) {
  const [isVisible, setIsVisible] = React.useState(true)
  const value = React.useMemo(() => [isVisible, setIsVisible], [isVisible])
  return <ConsultationPopupContext.Provider value={value} {...props} />
}

export { useConsultationPopupContext, ConsultationPopupProvider }
