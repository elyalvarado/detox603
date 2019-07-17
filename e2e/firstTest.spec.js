describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.text('Welcome to React'))).toBeVisible();
  });

  it('should find an element by testID', async () => {
    await expect(element(by.id('DebugText'))).toBeVisible();
  });

  it('should find a view by accesibility label', async () => {
    await expect(element(by.label('Edit App.js Container'))).toBeVisible();
  });

  it('should find a button by accesibility label', async () => {
    await expect(element(by.label('See your changes button'))).toBeVisible();
  });
});
