// tslint:disable:no-any
// tslint:disable:no-invalid-this
import {expect} from 'chai';
import {Context as MochaContext} from 'mocha';
import {doesNotReject} from 'assert';
import {Observable, of, Subject} from 'rxjs';
import * as jsonBadData from './data/Sample.data.json';
import {SQLRepository, Tenant} from '../Lib/sqlRepository';
import {GitRepository} from '../Lib/GitRepository';

describe('TopDevForLastXDays', () => {
  it('should return rowsAffected', async () => {
    let sqlRepositoy = new SQLRepository(null);
    let tenant = 'LabShare';
    let day = 1;
    await sqlRepositoy.getTopDev4LastXDays(tenant, day).then(result => {
      expect(result.toTable.length).to.greaterThan(0);
    });
  });
});

describe('GetOrg', () => {
  it('should return rowsAffected', async () => {
    let gitRepository = new GitRepository();
    await gitRepository.getOrg('1040817', true, true).then(result => {
      expect(result.toTable.length).to.greaterThan(0);
    });
  });
});

describe('GetRepos', () => {
  it('should return rowsAffected', async () => {
    let gitRepository = new GitRepository();
    await gitRepository.getRepos('1040817', 'LabShare', true, true).then(result => {
      expect(result.toTable.length).to.greaterThan(0);
    });
  });
});

describe('getDevs4Org', () => {
  it('should return rowsAffected', async () => {
    let gitRepository = new GitRepository();
    await gitRepository.getDevsFromGit('1040817', 'LabShare').then((result:any)  => {
      expect(result.toTable.length).to.greaterThan(0);
    });
  });
});

// describe('SetRepoCollection', () => {
//   it('should return recordset', async () => {
//     let sqlRepositoy = new SQLRepository(null);
//     let org = 'LabShare';
//     let tenantId = '1040817';
//     let repos = '1,2,3,4';
//     await sqlRepositoy.saveRepoCollection(tenantId, org, 'NewCollection', repos).then(result => {
//       expect(result.rowsAffected.length).to.greaterThan(0);
//       console.log(result.rowsAffected);
//     });
//   });
// });

// describe('GetAllRepoCollection4TenantOrg', () => {
//   it('should return recordset', async () => {
//     let sqlRepositoy = new SQLRepository(null);
//     let org = 'LabShare';
//     let tenantId = '1040817';

//     await sqlRepositoy.getAllRepoCollection4TenantOrg(tenantId, org, false).then((result:any) => {
//       expect(result.toTable.length).to.greaterThan(0);
//     });
//   });
// });

// describe('getRepoCollectionByName', () => {
//   it('should return recordset', async () => {
//     let sqlRepositoy = new SQLRepository(null);
//     await sqlRepositoy.getRepoCollectionByName('NewCollection', false).then((result:any) => {
//       expect(result.recordset.length).to.greaterThan(0);
//       console.log(result.recordset);
//     });
//   });
// });

//SetupWebHook
describe('SetupWebHook', () => {
  it.skip('should return a number', async () => {
    let gitRepository = new GitRepository();
    let org = 'anziosystems';
    let tenantId = '1040817';
    await gitRepository.setupWebHook(tenantId, org).then((result:any) => {
      console.log(result);
      expect(result).to.eq(1);
    });
  });
});

describe('LongestPullRequest', () => {
  it('should return recordset', async () => {
    let sqlRepositoy = new SQLRepository(null);
    let tenant = '1040817';
    let day = 1;
    await sqlRepositoy.getLongestPR(tenant, day).then((result:any)  => {
      expect(result.toTable.length).to.greaterThan(0);
    });
  });
});

describe('GetTopRespositories4XDays', () => {
  it('should return recordset', async () => {
    let sqlRepositoy = new SQLRepository(null);
    let tenant = '1040817';
    let day = 1;
    await sqlRepositoy.getTopRepo4XDays(tenant, day).then((result:any)  => {
      expect(result.toTable.length).to.greaterThan(0);
    });
  });
});

describe('PullRequest4Dev', () => {
  it('should return recordset', async () => {
    let sqlRepositoy = new SQLRepository(null);
    let tenant = '1040817';
    let day = 7;
    let login = 'artemnih';
    let state = 'closed';
    await sqlRepositoy.getPR4Dev(tenant, day, login, state, 10).then((result:any)  => {
      expect(result.toTable.length).to.greaterThan(0);
      console.log(result[0]);
    });
  });
});

describe('PullRequestCountForLastXDays', () => {
  it('should return recordset', async () => {
    let sqlRepositoy = new SQLRepository(null);
    let tenant = '1040817';
    let day = 30;

    await sqlRepositoy.getPRCount4LastXDays(tenant, day).then((result:any)  => {
      expect(result.toTable.length).to.greaterThan(0);
    });
  });
});

describe('GetPullRequestForId', () => {
  it('should return recordset', async () => {
    let sqlRepositoy = new SQLRepository(null);
    let tenant = '1040817';
    let id = 113;

    await sqlRepositoy.getPR4Id(tenant, id).then((result:any)  => {
      expect(result.toTable.length).to.greaterThan(0);
    });
  });
});
