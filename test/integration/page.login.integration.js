// https://github.com/smooth-code/jest-puppeteer/blob/master/examples/create-react-app/README.md

const puppeteer = global.puppeteer
const mkdirp = global.mkdirp

const SCREENSHOT_DIRECTORY = './test/results/screens/'

// describe('Reacticoon puppeteer tests', () => {
//   // Define global variables
//   let browser = global.browser
//   let page //= global.page

//   let methods

//   // beforeAll(async function() {
//   //   // const options = {}
//   //   // // const options = {
//   //   // //   headless: false,
//   //   // //   slowMo: 250,
//   //   // //   devtools: true,
//   //   // // }
//   //   // browser = await puppeteer.launch(options)
//   //   // methods.goTo = async function(route) {
//   //   //   await page.goto(`http://localhost:3000${route}`)
//   //   // }
//   // })

//   beforeEach(async function() {
//     page = await browser.newPage()
//     methods = global.getMethods({ page })
//   })

//   afterEach(async function() {
//     await page.close()
//   })

// afterAll(async function() {
//   await browser.close()
// })

// describe(`Test page ${pageName}`, () => {
//   testsCallback(
//     Object.assign({}, methods, {
//       page,
//     })
//   )
// })

//   describe('LoginPage', () => {
//     const pageName = 'LoginPage'

//     beforeEach(async () => {
//       await methods.goTo('/login')

//       mkdirp(`${SCREENSHOT_DIRECTORY}/${pageName}`)

//       // methods.screenshot = async fileName =>
//       //   await page.screenshot({
//       //     path: `${SCREENSHOT_DIRECTORY}/${pageName}/${screenshotIndex++}_${fileName}.png`,
//       //   })

//       // methods.testReacticoon = async () =>
//       //   await page.evaluate(() => window.ReacticoonTesting.test())

//       // methods.getRoute = async route =>
//       //   await page.evaluate(route => window.ReacticoonTesting.getRoute(route), route)

//       // methods.getCurrentRoute = async () =>
//       //   await page.evaluate(() => window.ReacticoonTesting.getCurrentRoute())

//       // methods.waitForRoute = async function(route) {
//       //   // TODO:
//       // }
//     })

//     it('Testing interract with reacticoon', async () => {
//       expect(await methods.testReacticoon()).toEqual(42)
//       expect((await methods.getRoute('LOGIN')).name).toEqual(await 'LOGIN')
//       expect((await methods.getCurrentRoute()).name).toEqual(await 'LOGIN')
//     })

//     // it('should open login page', async () => {
//     //   // await methods.isPage('/login')
//     // })

//     it('should match a form with a "LoginForm" name then fill its controls', async () => {
//       // await methods.screenshot('form__init')
//       await expect(page).toFillForm('form[name="LoginForm"]', {
//         login: 'test@test.fr',
//         password: 'bonjour1',
//       })
//       // await methods.screenshot('form__filled')
//       await expect(page).toClick('button[name="submitLoginForm"]')
//       // await methods.screenshot('form__submitting')
//     })
//   })
// })

// global.describeRoute('Login', '/login', { describe, beforeEach, beforeAll, it }, props => {
//   return [
//     [
//       'Testing interract with reacticoon',
//       async () => {
//         console.log(props)
//         const { testReacticoon, getRoute, getCurrentRoute } = props
//         expect(await testReacticoon()).toEqual(42)
//         // expect((await getRoute('LOGIN')).name).toEqual(await 'LOGIN')
//         // expect((await getCurrentRoute()).name).toEqual(await 'LOGIN')
//       },
//     ],
//   ]
// })

// test with wrapping. WIP
const wrap = require('/home/loic/dev/reacticoon/create-reacticoon-app/node_modules/jest-wrap')
wrap.register(global.withDescribeRoute)

let data
wrap()
  .withDescribeRoute('Login', '/login', global, d => {
    data = d
  })
  .describe('Login form', () => {
    it('Testing interract with reacticoon', async () => {
      const testReacticoon = data.testReacticoon
      // expect(1).toEqual(41)
      expect(await testReacticoon()).toEqual(42)
    })
  })
