const fathomGoals = () => {
  if (process.env.REACT_APP_FATHOM_ENV === 'production' && window.location.host === 'app.mistx.io') {
    return {
      SWAP_INTENT: '7ALLZ9YW',
      SWAP_COMPLETE: '3DCNTEQG',
      WRAP_INTENT: 'YQGPPIOH',
      WRAP_COMPLETE: 'CNANNFHO',
      UNWRAP_INTENT: 'G2ZACDDE',
      UNWRAP_COMPLETE: '01XVYDS8',
      CANCEL_INTENT: '2Q1C5XHV',
      CANCEL_COMPLETE: '7UOAJPGL',
      METAMASK_CONNECTED: 'MMYP7VT2',
      WALLET_CONNECT_CONNECTED: 'XJ3OFGXB',
      LEDGER_CONNECTED: 'BOPKDAFY',
      WALLET_CONNECTED: 'ARYZ5IHU',
      SETTINGS_OPENED: 'XCSAPCTL',
      SETTINGS_MINER_TIP_CHANGED: 'LE23QZFZ',
      SETTINGS_SLIPPAGE_CHANGED: '3ZNEZJNT',
      SETTINGS_DEADLINE_CHANGED: 'WXLHLI7R'
    }
  }
  return {
    WRAP_INTENT: 'W4SHAOVD',
    WRAP_COMPLETE: 'DVENJKDG',
    UNWRAP_INTENT: 'MBJQE5VT',
    UNWRAP_COMPLETE: 'CEEDDU06',
    SWAP_INTENT: 'AQMUJISQ',
    SWAP_COMPLETE: 'G6QMR6GI',
    CANCEL_INTENT: 'GZWTXZJ6',
    CANCEL_COMPLETE: 'WL9TKL6Q',
    METAMASK_CONNECTED: 'O7INS7NB',
    WALLET_CONNECT_CONNECTED: 'A6ICCX3D',
    LEDGER_CONNECTED: 'NSO3AQD7',
    WALLET_CONNECTED: 'OXVF4KQB',
    SETTINGS_OPENED: 'L6NDQENJ',
    SETTINGS_MINER_TIP_CHANGED: 'NAQCQ5N9',
    SETTINGS_DEADLINE_CHANGED: 'X27J9IH3'
  }
}

export default fathomGoals()
