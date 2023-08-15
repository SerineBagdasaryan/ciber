import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { StockComponent } from './stock.component';
import { StockService } from './stock.service';
import {Stock} from "../interfaces/stock";


describe('StockComponent', () => {
  let component: StockComponent;
  let fixture: ComponentFixture<StockComponent>;
  let stockService: jasmine.SpyObj<StockService>;

  const mockStocks: Stock[] = [
    {
          "accessionNumber": "0000320193-23-000077",
      "AccountsPayableCurrent": 46699000000,
      "AccountsReceivableNetCurrent": 19549000000,
      "AccumulatedDepreciationDepletionAndAmortizationPropertyPlantAndEquipment": 70787000000,
      "AccumulatedOtherComprehensiveIncomeLossNetOfTax": -11801000000,
      "AllocatedShareBasedCompensationExpense": 2617000000,
      "Assets": 335038000000,
      "AssetsCurrent": 122659000000,
      "AssetsNoncurrent": 212379000000,
      "AvailableForSaleSecuritiesDebtMaturitiesRollingAfterYearTenFairValue": 16646000000,
      "AvailableForSaleSecuritiesDebtMaturitiesRollingYearSixThroughTenFairValue": 11148000000,
      "AvailableForSaleSecuritiesDebtMaturitiesRollingYearTwoThroughFiveFairValue": 76267000000,
      "AvailableForSaleSecuritiesDebtMaturitiesSingleMaturityDate": 104061000000,
      "CashAndCashEquivalentsAtCarryingValue": 28408000000,
      "CashCashEquivalentsAndMarketableSecurities": 166543000000,
      "CashCashEquivalentsAndMarketableSecuritiesCost": 177778000000,
      "CashCashEquivalentsRestrictedCashAndRestrictedCashEquivalents": 29898000000,
      "CashEquivalentsAndMarketableSecuritiesAccumulatedGrossUnrealizedGainBeforeTax": 60000000,
      "CashEquivalentsAndMarketableSecuritiesAccumulatedGrossUnrealizedLossBeforeTax": 11295000000,
      "cik": "0000320193",
      "CommercialPaper": 3993000000,
      "CommonStockDividendsPerShareDeclared": 0.24,
      "CommonStockParOrStatedValuePerShare": 0.00001,
      "CommonStockSharesAuthorized": 50400000000,
      "CommonStockSharesIssued": 15647868000,
      "CommonStockSharesOutstanding": 15647868000,
      "CommonStocksIncludingAdditionalPaidInCapital": 70667000000,
      "ComprehensiveIncomeNetOfTax": 19826000000,
      "ContractWithCustomerLiability": 12200000000,
      "ContractWithCustomerLiabilityCurrent": 8158000000,
      "ContractWithCustomerLiabilityRevenueRecognized": 3300000000,
      "CostOfGoodsAndServicesSold": 45384000000,
      "dateFiled": 1691107200000,
      "DebtSecuritiesAvailableForSaleRestricted": 14100000000,
      "DocumentFiscalPeriodFocus": "Q3",
      "DocumentFiscalYearFocus": "2023",
      "documentType": "10-Q",
      "EarningsPerShareBasic": 1.27,
      "EarningsPerShareDiluted": 1.26,
      "EmployeeServiceShareBasedCompensationNonvestedAwardsTotalCompensationCostNotYetRecognized": 20900000000,
      "EmployeeServiceShareBasedCompensationTaxBenefitFromCompensationExpense": 993000000,
      "entityName": "Apple Inc.",
      "GrossProfit": 36413000000,
      "HedgedAssetFairValueHedge": 14863000000,
      "HedgedAssetStatementOfFinancialPositionExtensibleEnumeration": "http://fasb.org/us-gaap/2023#MarketableSecuritiesCurrent http://fasb.org/us-gaap/2023#MarketableSecuritiesNoncurrent",
      "HedgedLiabilityFairValueHedge": 17986000000,
      "HedgedLiabilityStatementOfFinancialPositionExtensibleEnumeration": "http://fasb.org/us-gaap/2023#LongTermDebtCurrent http://fasb.org/us-gaap/2023#LongTermDebtNoncurrent",
      "IncomeLossFromContinuingOperationsBeforeIncomeTaxesExtraordinaryItemsNoncontrollingInterest": 22733000000,
      "IncomeTaxExpenseBenefit": 2852000000,
      "InterestExpense": 998000000,
      "InventoryFinishedGoodsNetOfReserves": 3563000000,
      "InventoryNet": 7351000000,
      "InventoryRawMaterialsAndPurchasedPartsNetOfReserves": 3788000000,
      "InvestmentIncomeInterestAndDividend": 980000000,
      "irsNumber": "942404110",
      "Liabilities": 274764000000,
      "LiabilitiesAndStockholdersEquity": 335038000000,
      "LiabilitiesCurrent": 124963000000,
      "LiabilitiesNoncurrent": 149801000000,
      "LongTermDebt": 105300000000,
      "LongTermDebtCurrent": 7216000000,
      "LongTermDebtNoncurrent": 98071000000,
      "MarketableSecuritiesCurrent": 34074000000,
      "MarketableSecuritiesNoncurrent": 104061000000,
      "NetIncomeLoss": 19881000000,
      "NonoperatingIncomeExpense": -265000000,
      "NonRule10b51ArrAdoptedFlag": "false",
      "NonRule10b51ArrTrmntdFlag": "false",
      "NontradeReceivablesCurrent": 19637000000,
      "OperatingExpenses": 13415000000,
      "OperatingIncomeLoss": 22998000000,
      "OtherAssetsCurrent": 13640000000,
      "OtherAssetsNoncurrent": 64768000000,
      "OtherComprehensiveIncomeLossAvailableForSaleSecuritiesAdjustmentNetOfTax": -282000000,
      "OtherComprehensiveIncomeLossDerivativeInstrumentGainLossafterReclassificationandTax": 612000000,
      "OtherComprehensiveIncomeLossDerivativeInstrumentGainLossbeforeReclassificationafterTax": 509000000,
      "OtherComprehensiveIncomeLossDerivativeInstrumentGainLossReclassificationAfterTax": -103000000,
      "OtherComprehensiveIncomeLossForeignCurrencyTransactionAndTranslationAdjustmentNetOfTax": -385000000,
      "OtherComprehensiveIncomeLossNetOfTaxPortionAttributableToParent": -55000000,
      "OtherComprehensiveIncomeLossReclassificationAdjustmentFromAOCIForSaleOfSecuritiesNetOfTax": -58000000,
      "OtherComprehensiveIncomeUnrealizedHoldingGainLossOnSecuritiesArisingDuringPeriodNetOfTax": -340000000,
      "OtherLiabilitiesCurrent": 58897000000,
      "OtherLiabilitiesNoncurrent": 51730000000,
      "OtherNonoperatingIncomeExpense": -247000000,
      "periodEnd": 1688169600000,
      "periodStart": 1680393600000,
      "PropertyPlantAndEquipmentGross": 114337000000,
      "PropertyPlantAndEquipmentNet": 43550000000,
      "reportLink": "https://www.sec.gov/Archives/edgar/data/320193/000032019323000077/aapl-20230701_htm.xml",
      "ResearchAndDevelopmentExpense": 7442000000,
      "RetainedEarningsAccumulatedDeficit": 1408000000,
      "RevenueFromContractWithCustomerExcludingAssessedTax": 81797000000,
      "Rule10b51ArrAdoptedFlag": "false",
      "Rule10b51ArrTrmntdFlag": "false",
      "SellingGeneralAndAdministrativeExpense": 5973000000,
      "StockholdersEquity": 60274000000,
      "TradingSymbol": "AAPL",
      "UnrecordedUnconditionalPurchaseObligationBalanceOnFirstAnniversary": 3417000000,
      "UnrecordedUnconditionalPurchaseObligationBalanceOnFourthAnniversary": 1013000000,
      "UnrecordedUnconditionalPurchaseObligationBalanceOnSecondAnniversary": 1990000000,
      "UnrecordedUnconditionalPurchaseObligationBalanceOnThirdAnniversary": 3079000000,
      "UnrecordedUnconditionalPurchaseObligationBalanceSheetAmount": 18957000000,
      "UnrecordedUnconditionalPurchaseObligationDueInRemainderOfFiscalYear": 1260000000,
      "UnrecordedUnconditionalPurchaseObligationToBePaidAfterYearFour": 8198000000,
      "update": "20230803",
      "WeightedAverageNumberDilutedSharesOutstandingAdjustment": 77407000,
      "WeightedAverageNumberOfDilutedSharesOutstanding": 15775021000,
      "WeightedAverageNumberOfSharesOutstandingBasic": 15697614000,
      "id": "REPORTED_FINANCIALS",
      "key": "AAPL",
      "subkey": "10-Q",
      "date": 1691107200000,
      "updated": 1691274785000
    }
  ];

  beforeEach(() => {
    const stockServiceSpy = jasmine.createSpyObj('StockService', ['getStockData']);

    TestBed.configureTestingModule({
      declarations: [StockComponent],
      providers: [{ provide: StockService, useValue: stockServiceSpy }]
    });

    fixture = TestBed.createComponent(StockComponent);
    component = fixture.componentInstance;
    stockService = TestBed.inject(StockService) as jasmine.SpyObj<StockService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load stock reports on initialization', (done) => {
    stockService.getStockData.and.returnValue(of(mockStocks));

    fixture.detectChanges();

    component.stockReports$.subscribe((stocks) => {
      expect(stocks).toEqual(mockStocks);
      done();
    });
  });

  it('should increment offset and load stock reports on nextPage', (done) => {
    stockService.getStockData.and.returnValue(of(mockStocks));

    component.nextPage();

    expect(component.offset).toEqual(1);
    expect(stockService.getStockData).toHaveBeenCalledWith(1, component.last);

    component.stockReports$.subscribe(() => {
      done();
    });
  });

  it('should decrement offset and load stock reports on prevPage', (done) => {
    stockService.getStockData.and.returnValue(of(mockStocks));

    component.offset = 1;
    component.prevPage();

    expect(component.offset).toEqual(0);
    expect(stockService.getStockData).toHaveBeenCalledWith(0, component.last);

    component.stockReports$.subscribe(() => {
      done();
    });
  });

  it('should enable/disable "Prev" button based on offset value', () => {
    const prevButton: HTMLButtonElement = fixture.nativeElement.querySelector('.pagination button:first-child');

    component.offset = 0;
    fixture.detectChanges();

    expect(prevButton.disabled).toBe(true);

    component.offset = 1;
    fixture.detectChanges();

    expect(prevButton.disabled).toBe(false);
  });

  it('should trigger "prevPage()" and "nextPage()" methods when buttons are clicked', () => {
    spyOn(component, 'prevPage');
    spyOn(component, 'nextPage');

    const prevButton: HTMLButtonElement = fixture.nativeElement.querySelector('.pagination button:first-child');
    prevButton.click();

    expect(component.prevPage).toHaveBeenCalled();

    const nextButton: HTMLButtonElement = fixture.nativeElement.querySelector('.pagination button:last-child');
    nextButton.click();

    expect(component.nextPage).toHaveBeenCalled();
  });
})
