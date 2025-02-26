```C++
ListNode* partition(ListNode* head, int x) {
    ListNode* dummy = new ListNode(0, head);
    ListNode* s_dummy = new ListNode();
    ListNode* s_tail = s_dummy;
    ListNode* g_dummy = new ListNode();
    ListNode* g_tail = g_dummy;

    ListNode* curr = head;
    // Traverse the list and partition it into two parts
    while (curr != nullptr) {
        dummy->next = curr->next;

        if (curr->val < x) {
            s_tail->next = curr;
            s_tail = s_tail->next;
        } else {
            g_tail->next = curr;
            g_tail = g_tail->next;
        }

        curr = curr->next;
    }

    s_tail->next = g_dummy->next;
    g_tail->next = nullptr;
        
    return s_dummy->next;
}
```