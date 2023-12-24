describe('example', () => {
    it('google search', () => {
        cy.visit("https://www.google.com/")
        cy.get("textarea#APjFqb").type("Cypress{enter}")
    })

    it('cypress visit', () => {
        cy.visit("https://www.cypress.io/")
        cy.title().should('eq', 'JavaScript Component Testing and E2E Testing Framework | Cypress')
        cy.title().should('include', 'JavaScript')
    })

    it('selector', () => {
        cy.visit('https://play2.automationcamp.ir/index.html')
        cy.get('#fname').type('alireza')
    })

    it('scroll', () => {
        cy.visit('https://datatables.net/examples/basic_init/scroll_x.html')
        cy.get('a[data-dt-idx="1"]').click()
    })

    it('contain', () => {
        cy.visit('https://play2.automationcamp.ir/index.html')
        cy.contains('This is your form title:')
        cy.contains('label[for=moption]', 'Option 2')
        cy.get('label[for=moption]').contains('Option 3')
    })

    it('children parent', () => {
        cy.visit('https://play2.automationcamp.ir/index.html')
        cy.get('#owc').children()
        cy.get('#owc').children("[value='option 2']")
        cy.contains('Singer').parent()
    })

    it('siblings', () => {
        cy.visit('https://play2.automationcamp.ir/index.html')
        cy.get('#owc').children("[value='option 2']").siblings().should('have.length', 3)
    })

    it('ancestors', () => {
        cy.visit('https://en.wikipedia.org/wiki/Main_Page')
        cy.get('#mp-tfa > p > :nth-child(1) > a').parents()
        cy.get('#mp-tfa > p > :nth-child(1) > a').parents('#mp-tfa')
        cy.get('#mp-tfa > p > :nth-child(1) > a').parentsUntil('#bodyContent')
    })

    it('find within', () => {
        cy.visit('https://en.wikipedia.org/wiki/Main_Page')
        cy.get('#bodyContent').find('p > :nth-child(1) > a')
        cy.get('#bodyContent').within(() => {
            cy.get('p > :nth-child(1) > a')
        })
    })

    it('eq first last', () => {
        cy.visit('https://play2.automationcamp.ir/index.html')
        cy.get('td').eq(5)
        cy.get('td').first()
        cy.get('td').last()
    })

    it('filter not', () => {
        cy.visit('https://play2.automationcamp.ir/index.html')
        cy.get('td').filter('#td_id')
        cy.get('td').not('#td_id')
    })

    it('traversal', () => {
        cy.visit('https://play2.automationcamp.ir/index.html')
        cy.get('#fname').closest('div').should('have.class', 'main')
        cy.get("[value='td1_value']").next()
        cy.get("[value='td1_value']").nextAll()
        cy.get("[value='td1_value']").nextUntil("[value='td4_value']")
        cy.get("[value='td5_value']").prev()
        cy.get("[value='td5_value']").prevAll()
        cy.get("[value='td5_value']").prevUntil("[value='td1_value']")
    })
})