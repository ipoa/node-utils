var should = require('should')
var utils = require('../../lib/utils')

describe('lib/utils', () => {
  it('should be an Object', () => {
    utils.should.be.an.Object()
  })

  it('should have `isString` property and be a function', () => {
    utils.should.have.property('isString')
    should(utils.isString).be.a.Function()
  })

  it('should have `isNumber` property and be a function', () => {
    utils.should.have.property('isNumber')
    should(utils.isNumber).be.a.Function()
  })

  it('should have `isBuffer` property and be a function', () => {
    utils.should.have.property('isBuffer')
    should(utils.isBuffer).be.a.Function()
  })

  it('should have `isObject` property and be a function', () => {
    utils.should.have.property('isObject')
    should(utils.isObject).be.a.Function()
  })

  describe('utils::isJSON', () => {
    it('should have `isJSON` property and be a function', () => {
      utils.should.have.property('isJSON')
      should(utils.isJSON).be.a.Function()
    })

    it('method `isJSON` returns the result test', function () {
      var goodJson = '{"a":"obja","b":[0,1,2],"c":{"d":"some object"}}'
      var badJson = '{"a":"obja""b":[0,1,2],"c":{"d":"some object"}}'
      var strNumber = '121212'
      should(utils.isJSON(goodJson)).eql(true)
      should(utils.isJSON(badJson)).eql(true)
      should(utils.isJSON(strNumber)).eql(false)
      // check is an object
      var object = { a: 12, b: [1, 2, 3] }
      should(utils.isJSON(object)).eql(false)
      should(utils.isJSON(object, true)).eql(true)
    })
  })

  it('should have `extend` property and be a function', () => {
    utils.should.have.property('extend')
    should(utils.extend).be.a.Function()
  })

  describe('utils::isProcessEnv', () => {
    it('method `isProcessEnv` should be function', () => {
      should(utils.isProcessEnv).be.a.Function()
    })

    it('method `isProcessEnv` should returns Boolean', () => {
      utils.isProcessEnv().should.be.a.Boolean()
    })

    it('method `isProcessEnv` should returns boolean `true` under Node environment', () => {
      utils.isProcessEnv().should.be.a.Boolean().and.be.True()
    })
  })

  describe('utils::isProcessFormData', () => {
    it('method `isProcessFormData` should be function', () => {
      should(utils.isProcessFormData).be.a.Function()
    })

    it('method `isProcessFormData` should returns Boolean', () => {
      utils.isProcessFormData().should.be.a.Boolean()
    })

    const mockup = {
      toString: () => '[object FormData]'
    }
    it('method `isProcessFormData` should returns boolean `true` under Node environment', () => {
      mockup.should.be.an.Object()
      utils.isProcessFormData(mockup).should.be.a.Boolean().and.be.True()
    })
  })
  describe('utils::getUrlParams', () => {
    it('method `getUrlParams` should be function', () => {
      utils.getUrlParams.should.be.a.Function()
    })

    it('method `getUrlParams` should returns object', () => {
      utils.getUrlParams().should.be.a.Object()
    })

    it('method `getUrlParams` loads url parameters  should  return  object result', () => {
      const url = 'http://xxx.xxx.com/?id=1&start=0&count=10'
      should(utils.getUrlParams(url)).eql({ id: '1', start: '0', count: '10' })
    })
  })
})
