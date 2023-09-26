import { AuthenticateApi, BalanceApi, BannersApi, BorrelkaartgroupsApi, ContainersApi, FilesApi, InvoicesApi, PayoutRequestsApi, PointofsaleApi, ProductCategoriesApi, ProductsApi, RbacApi, RootApi, StripeApi, TransactionsApi, TransfersApi, UsersApi, VatGroupsApi } from '@sudosos/sudosos-client';
type Token = {
    token: string;
    expires: string;
};
export declare function clearTokenInStorage(): void;
export declare function parseToken(rawToken: string): Token;
export declare function setTokenInStorage(jwtToken: string): void;
export declare function getTokenFromStorage(): Token;
export declare class ApiService {
    private readonly _authenticateApi;
    private readonly _balanceApi;
    private readonly _usersApi;
    private readonly _posApi;
    private readonly _categoryApi;
    private readonly _transactionApi;
    private readonly _bannerApi;
    private readonly _rootApi;
    private readonly _borrelkaartApi;
    private readonly _containerApi;
    private readonly _filesApi;
    private readonly _invoicesApi;
    private readonly _payoutsApi;
    private readonly _productsApi;
    private readonly _transfersApi;
    private readonly _vatGroupsApi;
    private readonly _stripeApi;
    private readonly _rbacApi;
    private readonly _openBannerApi;
    /**
     * Returns True if there is a token in the LocalStorage and if it hasn't expired yet.
     */
    isAuthenticated(): boolean;
    constructor(basePath: string);
    get authenticate(): AuthenticateApi;
    get balance(): BalanceApi;
    get pos(): PointofsaleApi;
    get category(): ProductCategoriesApi;
    get transaction(): TransactionsApi;
    get banner(): BannersApi;
    get rootApi(): RootApi;
    get borrelkaart(): BorrelkaartgroupsApi;
    get container(): ContainersApi;
    get files(): FilesApi;
    get invoices(): InvoicesApi;
    get payouts(): PayoutRequestsApi;
    get products(): ProductsApi;
    get transfers(): TransfersApi;
    get vatGroups(): VatGroupsApi;
    get stripe(): StripeApi;
    get rbac(): RbacApi;
    get user(): UsersApi;
    get openBanner(): BannersApi;
}
export {};
