describe('ReqRes - API Testing com cy.request', () => {
  const baseUrl = 'https://reqres.in'

  it('GET /api/users?page=2 deve retornar lista de usuários', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/api/users`,
      qs: { page: 2 }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('page', 2)
      expect(response.body).to.have.property('data')
      expect(response.body.data).to.be.an('array').and.to.have.length.greaterThan(0)
      expect(response.body.data[0]).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar')
    })
  })

  it('POST /api/users deve criar usuário (mock) e retornar id/createdAt', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/api/users`,
      body: {
        name: 'Nicholas',
        job: 'QA Engineer'
      }
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.include({
        name: 'Nicholas',
        job: 'QA Engineer'
      })
      expect(response.body).to.have.property('id')
      expect(response.body).to.have.property('createdAt')
    })
  })

  it('GET /api/unknown/23 deve retornar 404 (not found)', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/api/unknown/23`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404)
      expect(response.body).to.deep.eq({})
    })
  })
})
