import os
from playwright.sync_api import sync_playwright, expect

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()

    # Get the absolute path to the HTML file
    file_path = os.path.abspath('home.html')

    page.goto(f'file://{file_path}')

    # Click the "Dron Options" button
    page.click('label.ui.green.submit.button')

    # Click the "MK 1 Megatron" link
    page.click('a[href="#modal-1"]')

    # Click the "Select this Drone" button
    page.click('p.ui.green.submit.button')

    # Verify the header of the contact page
    header = page.locator('#contact-page .header')
    expect(header).to_have_text('Enter Delivery Details')

    # Take a screenshot
    page.screenshot(path='jules-scratch/verification/verification.png')

    browser.close()
