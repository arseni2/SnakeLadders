describe('NagaBonar Module', function() {
    let successTest = 0; 

    beforeEach(function() {
        window.localStorage.clear();
    });

    it('should check if jQuery is loaded', function() {
        expect(NagaBonar.jq).not.toBeUndefined(); 
        successTest++;
    });

    it('should roll a dice and return a number between 1 and 6', function() {
        const result = NagaBonar.random();
        expect(result).toBeGreaterThan(0);
        expect(result).toBeLessThan(7);
        successTest++;
    });

    it('should initialize grid and hide popup', function(done) {
        NagaBonar.initGrid('.board', function(message) {
            expect(message).toBe('Start the game');
            done();
        });
    });

    afterAll(function() {

    });
});

