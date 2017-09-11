describe('Diner\'s Club', function() {
  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
});

describe('American Express', function() {
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  var assert = chai.assert;
 
  it('has a prefix of 4 and a length of 13', function() {
    assert.equal(detectNetwork('4123456789012'), 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert.equal(detectNetwork('4123456789012345'), 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert.equal(detectNetwork('4123456789023445678'), 'Visa');
  });
});

describe('MasterCard', function() {
  var should = chai.should();
 
  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  });
});

describe('Discover', function() {
  var should = chai.should();

  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6584958493849584').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6548372938475847584').should.equal('Discover');
  });

  for(var discoverPrefix = 644; discoverPrefix <= 649; discoverPrefix++) {
    (function(discoverPrefix) {
      it('has a prefix of ' + discoverPrefix + ' and a length of 16', function() {
        detectNetwork(discoverPrefix.toString() + '3849382738495').should.equal('Discover');
      });

      it('has a prefix of ' + discoverPrefix + ' and a length of 19', function() {
        detectNetwork(discoverPrefix.toString() + '3849382738495876').should.equal('Discover');
      });
    })(discoverPrefix);
  }

  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011904327438103').should.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011234980987123444').should.equal('Discover');
  });
});

describe('Maestro', function() {
  var should = chai.should();

  for(var maestroLength = 12; maestroLength <= 19; maestroLength++) {
    (function(maestroLength) {
        it('has a prefix of 5018 and a length of ' + maestroLength, function() {
          detectNetwork('5018' + '0123456789101112131415'.substring(0, maestroLength - 4)).should.equal('Maestro');
        });

        it('has a prefix of 5020 and a length of ' + maestroLength, function() {
          detectNetwork('5020' + '0123456789101112131415'.substring(0, maestroLength - 4)).should.equal('Maestro');
        }); 

        it('has a prefix of 5038 and a length of ' + maestroLength, function() {
          detectNetwork('5038' + '0123456789101112131415'.substring(0, maestroLength - 4)).should.equal('Maestro');
        }); 

        it('has a prefix of 6304 and a length of ' + maestroLength, function() {
          detectNetwork('6304' + '0123456789101112131415'.substring(0, maestroLength - 4)).should.equal('Maestro');
        }); 
    })(maestroLength)
  }
});

describe('China UnionPay', function() {
  var should = chai.should();
  for(var unionPayPrefixOne = 622126; unionPayPrefixOne <= 622925; unionPayPrefixOne++ ) {
    (function(unionPayPrefixOne) {
      it('has a prefix of ' + unionPayPrefixOne + ' and a length of 16', function() {
        detectNetwork(unionPayPrefixOne.toString() + '4758475849').should.equal('China UnionPay');
      });

      it('has a prefix of ' + unionPayPrefixOne + ' and a length of 17', function() {
        detectNetwork(unionPayPrefixOne.toString() + '47584758499').should.equal('China UnionPay');
      });

      it('has a prefix of ' + unionPayPrefixOne + ' and a length of 18', function() {
        detectNetwork(unionPayPrefixOne.toString() + '475847584990').should.equal('China UnionPay');
      });

      it('has a prefix of ' + unionPayPrefixOne + ' and a length of 19', function() {
        detectNetwork(unionPayPrefixOne.toString() + '4758475849909').should.equal('China UnionPay');
      });
    })(unionPayPrefixOne)
  }

  for(var unionPayPrefixTwo = 624; unionPayPrefixTwo <= 626; unionPayPrefixTwo++) {
    (function(unionPayPrefixTwo) {
      it('has a prefix of ' + unionPayPrefixTwo + ' and a length of 16', function() {
        detectNetwork(unionPayPrefixTwo.toString() + '7584758685879').should.equal('China UnionPay');
      });

      it('has a prefix of ' + unionPayPrefixTwo + ' and a length of 17', function() {
        detectNetwork(unionPayPrefixTwo.toString() + '75847586858788').should.equal('China UnionPay');
      });

      it('has a prefix of ' + unionPayPrefixTwo + ' and a length of 18', function() {
        detectNetwork(unionPayPrefixTwo.toString() + '758475868554498').should.equal('China UnionPay');
      });    

      it('has a prefix of ' + unionPayPrefixTwo + ' and a length of 19', function() {
        detectNetwork(unionPayPrefixTwo.toString() + '7584758685544987').should.equal('China UnionPay');
      });

    })(unionPayPrefixTwo);
  }

  for(var unionPayPrefixThree = 6282; unionPayPrefixThree <= 6288; unionPayPrefixThree++) {
    (function(unionPayPrefixThree) {
      it('has a prefix of ' + unionPayPrefixThree + ' and a length of 16', function() {
        detectNetwork(unionPayPrefixThree.toString() + '758475868554').should.equal('China UnionPay');
      });

      it('has a prefix of ' + unionPayPrefixThree + ' and a length of 17', function() {
        detectNetwork(unionPayPrefixThree.toString() + '7584758685548').should.equal('China UnionPay');
      });

      it('has a prefix of ' + unionPayPrefixThree + ' and a length of 18', function() {
        detectNetwork(unionPayPrefixThree.toString() + '75847586855449').should.equal('China UnionPay');
      });    

      it('has a prefix of ' + unionPayPrefixThree + ' and a length of 19', function() {
        detectNetwork(unionPayPrefixThree.toString() + '758475868554498').should.equal('China UnionPay');
      });

    })(unionPayPrefixThree);
  }
  
});
describe('Switch', function() {
  var should = chai.should();

  it('has a prefix of 4903 and a length of 16', function() {
    detectNetwork('4903748596857685').should.equal('Switch');
  });
  it('has a prefix of 4903 and a length of 18', function() {
    detectNetwork('490374859685768523').should.equal('Switch');
  });
  it('has a prefix of 4903 and a length of 19', function() {
    detectNetwork('4903748596857685234').should.equal('Switch');
  });

  it('has a prefix of 4905 and a length of 16', function() {
    detectNetwork('4905748596857685').should.equal('Switch');
  });
  it('has a prefix of 4905 and a length of 18', function() {
    detectNetwork('490574859685768523').should.equal('Switch');
  });
  it('has a prefix of 4905 and a length of 19', function() {
    detectNetwork('4905748596857685234').should.equal('Switch');
  });

  it('has a prefix of 4911 and a length of 16', function() {
    detectNetwork('4911748596857685').should.equal('Switch');
  });
  it('has a prefix of 4911 and a length of 18', function() {
    detectNetwork('491174859685768523').should.equal('Switch');
  });
  it('has a prefix of 4911 and a length of 19', function() {
    detectNetwork('4911748596857685234').should.equal('Switch');
  });

  it('has a prefix of 4936 and a length of 16', function() {
    detectNetwork('4936748596857685').should.equal('Switch');
  });
  it('has a prefix of 4936 and a length of 18', function() {
    detectNetwork('493674859685768523').should.equal('Switch');
  });
  it('has a prefix of 4936 and a length of 19', function() {
    detectNetwork('4936748596857685234').should.equal('Switch');
  });

  it('has a prefix of 6333 and a length of 16', function() {
    detectNetwork('6333748596857685').should.equal('Switch');
  });
  it('has a prefix of 6333 and a length of 18', function() {
    detectNetwork('633374859685768523').should.equal('Switch');
  });
  it('has a prefix of 6333 and a length of 19', function() {
    detectNetwork('6333748596857685234').should.equal('Switch');
  });

  it('has a prefix of 6759 and a length of 16', function() {
    detectNetwork('6759748596857685').should.equal('Switch');
  });
  it('has a prefix of 6759 and a length of 18', function() {
    detectNetwork('675974859685768523').should.equal('Switch');
  });
  it('has a prefix of 6759 and a length of 19', function() {
    detectNetwork('6759748596857685234').should.equal('Switch');
  });

  it('has a prefix of 564182 and a length of 16', function() {
    detectNetwork('5641825869784736').should.equal('Switch');
  });
  it('has a prefix of 564182 and a length of 18', function() {
    detectNetwork('564182586978473623').should.equal('Switch');
  });
  it('has a prefix of 564182 and a length of 19', function() {
    detectNetwork('5641825869784736234').should.equal('Switch');
  });

  it('has a prefix of 633110 and a length of 16', function() {
    detectNetwork('6331105869784736').should.equal('Switch');
  });
  it('has a prefix of 633110 and a length of 18', function() {
    detectNetwork('633110586978473623').should.equal('Switch');
  });
  it('has a prefix of 633110 and a length of 19', function() {
    detectNetwork('6331105869784736234').should.equal('Switch');
  });
  it('has a prefix of 6333 and a length of 16', function() {
    detectNetwork('6333123456789012').should.equal('Switch');
  });
  it('has a prefix of 6333 and a length of 18', function() {
    detectNetwork('633312345678901234').should.equal('Switch');
  });
  it('has a prefix of 6333 and a length of 19', function() {
    detectNetwork('6333123456789012345').should.equal('Switch');
  });
  it('has a prefix of 6759 and a length of 16', function() {
    detectNetwork('6759123456789012').should.equal('Switch');
  });
  it('has a prefix of 6759 and a length of 18', function() {
    detectNetwork('675912345678901234').should.equal('Switch');
  });
  it('has a prefix of 6759 and a length of 19', function() {
    detectNetwork('6759123456789012345').should.equal('Switch');
  });

});