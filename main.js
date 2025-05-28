// Enhanced Toggle Solution Function
function toggleSolution(questionId) {
    const content = document.getElementById(questionId);
    const button = content.previousElementSibling;
    const arrow = button.querySelector('.arrow');
    
    if (content.classList.contains('show')) {
        // Hide solution
        content.classList.remove('show');
        arrow.classList.remove('rotate');
        button.classList.remove('opened');
        button.querySelector('.btn-text').textContent = 'Show Solution';
        
        // Add closing animation
        content.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => {
            content.style.display = 'none';
            content.style.animation = '';
        }, 300);
    } else {
        // Show solution and auto-generate content
        content.style.display = 'block';
        
        // Auto-solve based on question ID
        if (questionId === 'aprioriProblem1Solution') {
            solveAprioriProblem1();
        } else if (questionId === 'aprioriProblem2Solution') {
            solveAprioriProblem2();
        }
        
        setTimeout(() => {
            content.classList.add('show');
            arrow.classList.add('rotate');
            button.classList.add('opened');
            button.querySelector('.btn-text').textContent = 'Hide Solution';
        }, 10);
        
        // Animate progress bar if exists
        const progressBar = content.querySelector('.progress-fill');
        if (progressBar) {
            setTimeout(() => {
                progressBar.style.width = '100%';
            }, 500);
        }
    }
}

// Problem 1: Apriori Algorithm - Grocery Store
function solveAprioriProblem1() {
    const solution = `
        <div class="solution">
            <h4>Solution: Apriori Algorithm - Grocery Store</h4>
            <p><strong>Support Threshold:</strong> s = 2</p>
            
            <h5>Step 1: Calculate Single Item Frequencies</h5>
            <div class="formula">
                • HotDogs: T1, T2, T3, T6 → Support = 4<br>
                • Buns: T1, T2 → Support = 2<br>
                • Ketchup: T1, T5 → Support = 2<br>
                • Coke: T3, T4, T6 → Support = 3<br>
                • Chips: T3, T4, T5, T6 → Support = 4
            </div>
            
            <h5>Step 2: Frequent 1-itemsets (L₁)</h5>
            <p>All items meet threshold ≥ 2:</p>
            <div class="answer">L₁ = {HotDogs, Buns, Ketchup, Coke, Chips}</div>
            
            <h5>Step 3: Generate 2-itemset Candidates (C₂) and Calculate Support</h5>
            <div class="formula">
                1. {HotDogs, Buns}: T1, T2 → Support = 2 ✓<br>
                2. {HotDogs, Ketchup}: T1 → Support = 1 ✗<br>
                3. {HotDogs, Coke}: T3, T6 → Support = 2 ✓<br>
                4. {HotDogs, Chips}: T3, T6 → Support = 2 ✓<br>
                5. {Buns, Ketchup}: T1 → Support = 1 ✗<br>
                6. {Buns, Coke}: none → Support = 0 ✗<br>
                7. {Buns, Chips}: none → Support = 0 ✗<br>
                8. {Ketchup, Coke}: none → Support = 0 ✗<br>
                9. {Ketchup, Chips}: T5 → Support = 1 ✗<br>
                10. {Coke, Chips}: T3, T4, T6 → Support = 3 ✓
            </div>
            
            <h5>Step 4: Frequent 2-itemsets (L₂)</h5>
            <div class="answer">L₂ = {{HotDogs, Buns}, {HotDogs, Coke}, {HotDogs, Chips}, {Coke, Chips}}</div>
            
            <h5>Step 5: Generate 3-itemset Candidates (C₃) and Calculate Support</h5>
            <div class="formula">
                1. {HotDogs, Buns, Coke}: none → Support = 0 ✗<br>
                2. {HotDogs, Buns, Chips}: none → Support = 0 ✗<br>
                3. {HotDogs, Coke, Chips}: T3, T6 → Support = 2 ✓<br>
                4. {Buns, Coke, Chips}: none → Support = 0 ✗
            </div>
            
            <h5>Step 6: Frequent 3-itemsets (L₃)</h5>
            <div class="answer">L₃ = {{HotDogs, Coke, Chips}}</div>
            
            <h5>Step 7: No more candidates can be generated</h5>
            <p>Since L₃ has only one itemset, no 4-itemsets can be formed.</p>
        </div>
        <div class="answer">
            <strong>Final Result - All Frequent Itemsets:</strong><br>
            <strong>1-itemsets:</strong> HotDogs, Buns, Ketchup, Coke, Chips<br>
            <strong>2-itemsets:</strong> {HotDogs, Buns}, {HotDogs, Coke}, {HotDogs, Chips}, {Coke, Chips}<br>
            <strong>3-itemsets:</strong> {HotDogs, Coke, Chips}
        </div>
    `;
    document.getElementById('aprioriProblem1Solution').innerHTML = solution;
}

// Problem 2: Apriori Algorithm - 5-Transaction Database
function solveAprioriProblem2() {
    const solution = `
        <div class="solution">
            <h4>Solution: Apriori Algorithm - 5-Transaction Database</h4>
            <p><strong>Minimum Support:</strong> 60% of 5 transactions = 3 transactions</p>
            
            <h5>Step 1: Calculate Single Item Frequencies</h5>
            <div class="formula">
                • A: T1, T3, T4 → Support = 3 ✓<br>
                • B: T1, T2, T5 → Support = 3 ✓<br>
                • C: T1, T2 → Support = 2 ✗<br>
                • D: T1, T2, T3, T4, T5 → Support = 5 ✓<br>
                • E: T1, T2, T3, T5 → Support = 4 ✓<br>
                • F: T1, T2, T4 → Support = 3 ✓<br>
                • G: T2 → Support = 1 ✗<br>
                • H: T3 → Support = 1 ✗<br>
                • I: T4 → Support = 1 ✗<br>
                • J: T4 → Support = 1 ✗<br>
                • K: T5 → Support = 1 ✗
            </div>
            
            <h5>Step 2: Frequent 1-itemsets (L₁)</h5>
            <div class="answer">L₁ = {A, B, D, E, F}</div>
            
            <h5>Step 3: Generate 2-itemset Candidates (C₂) and Calculate Support</h5>
            <div class="formula">
                1. {A, B}: T1 → Support = 1 ✗<br>
                2. {A, D}: T1, T3, T4 → Support = 3 ✓<br>
                3. {A, E}: T1, T3 → Support = 2 ✗<br>
                4. {A, F}: T1, T4 → Support = 2 ✗<br>
                5. {B, D}: T1, T2, T5 → Support = 3 ✓<br>
                6. {B, E}: T1, T2, T5 → Support = 3 ✓<br>
                7. {B, F}: T1, T2 → Support = 2 ✗<br>
                8. {D, E}: T1, T2, T3, T5 → Support = 4 ✓<br>
                9. {D, F}: T1, T2, T4 → Support = 3 ✓<br>
                10. {E, F}: T1, T2 → Support = 2 ✗
            </div>
            
            <h5>Step 4: Frequent 2-itemsets (L₂)</h5>
            <div class="answer">L₂ = {{A, D}, {B, D}, {B, E}, {D, E}, {D, F}}</div>
            
            <h5>Step 5: Generate 3-itemset Candidates (C₃) and Calculate Support</h5>
            <div class="formula">
                1. {A, D, E}: T1, T3 → Support = 2 ✗<br>
                2. {A, D, F}: T1, T4 → Support = 2 ✗<br>
                3. {B, D, E}: T1, T2, T5 → Support = 3 ✓<br>
                4. {B, D, F}: T1, T2 → Support = 2 ✗<br>
                5. {D, E, F}: T1, T2 → Support = 2 ✗
            </div>
            
            <h5>Step 6: Frequent 3-itemsets (L₃)</h5>
            <div class="answer">L₃ = {{B, D, E}}</div>
            
            <h5>Step 7: No 4-itemsets possible</h5>
            <p>Since L₃ contains only one itemset, no 4-itemsets can be generated.</p>
        </div>
        <div class="answer">
            <strong>Final Result - All Frequent Itemsets:</strong><br>
            <strong>1-itemsets:</strong> A, B, D, E, F<br>
            <strong>2-itemsets:</strong> {A, D}, {B, D}, {B, E}, {D, E}, {D, F}<br>
            <strong>3-itemsets:</strong> {B, D, E}
        </div>
    `;
    document.getElementById('aprioriProblem2Solution').innerHTML = solution;
}

// Add slide up animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from { 
            opacity: 1; 
            max-height: 2000px; 
            transform: translateY(0);
        }
        to { 
            opacity: 0; 
            max-height: 0; 
            transform: translateY(-10px);
        }
    }
`;
document.head.appendChild(style);

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Data Mining Lab 3 - Apriori Algorithm loaded');
});