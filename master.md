# PAM Workflow

> A New user wants Privilege Access to Server

## 1. User Provisioning

- Check if user is onboarded in Cyberark
  - If No- Create user ( assign Privilege cloud user role during creation)
  - If yes- see Privilege cloud user role should be assign

## 2. Safe Provisioning

- Check if safe exist (follow one naming convention - to avoid duplicate safes)
  - If safe exist- Add user to safe with list and use account privilege
  - If safe doesn't exist - create safe and add user with above mentioned privilege

## 3. Account Provisioning

- Check if account exists
  - If yes- bingo job done
  - If no, create account with (account type(wind/linux). safe, platform, username, domain, password) and reconcile
